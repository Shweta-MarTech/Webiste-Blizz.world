// Notify IndexNow (Bing, Yandex, Seznam, Naver…) about new or changed pages on blizz.world.
//
// Reads the live sitemap, fingerprints each page's visible content (title, meta
// description, main text) and submits only URLs that are new, changed or removed
// since the last run. Fingerprints are kept in .indexnow-cache/hashes.json, which
// the GitHub Action caches between runs.
//
// Usage: node scripts/indexnow.mjs          (changed URLs only)
//        node scripts/indexnow.mjs --all    (submit every URL)
//        node scripts/indexnow.mjs --dry-run

import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const SITE = "https://www.blizz.world";
const HOST = "www.blizz.world";
const KEY = "e7900d0c2f2e2695992168c3fa7eac0a"; // must match public/<KEY>.txt
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
// Plain-text files for AI assistants aren't in the sitemap but should be re-crawled too
const EXTRA_URLS = [`${SITE}/llms.txt`, `${SITE}/pricing.md`];
const CACHE_FILE = ".indexnow-cache/hashes.json";

const args = new Set(process.argv.slice(2));
const submitAll = args.has("--all");
const dryRun = args.has("--dry-run");

async function get(url) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "blizz-indexnow/1.0" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (err) {
      if (attempt === 3) throw new Error(`${url}: ${err.message}`);
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
}

// Only the parts a reader (or search engine) sees; ignores build IDs and script hashes
function fingerprint(url, body) {
  let content = body;
  if (!/\.(txt|md)$/.test(url)) {
    const title = body.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "";
    const description = body.match(/<meta name="description" content="([^"]*)"/i)?.[1] ?? "";
    const main = (body.match(/<main[\s\S]*?<\/main>/i)?.[0] ?? body)
      .replace(/<(script|style)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    content = [title, description, main].join("\n");
  }
  return createHash("sha256").update(content).digest("hex");
}

async function loadPrevious() {
  try {
    return JSON.parse(await readFile(CACHE_FILE, "utf8"));
  } catch {
    return {};
  }
}

const sitemap = await get(`${SITE}/sitemap.xml`);
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
urls.push(...EXTRA_URLS);

const previous = await loadPrevious();
const current = {};
for (const url of urls) {
  current[url] = fingerprint(url, await get(url));
}

const changed = urls.filter((url) => submitAll || previous[url] !== current[url]);
const removed = Object.keys(previous).filter((url) => !(url in current));
const toSubmit = [...changed, ...removed];

console.log(`Checked ${urls.length} URLs: ${changed.length} new/changed, ${removed.length} removed.`);
toSubmit.forEach((url) => console.log(`  • ${url}`));

if (toSubmit.length === 0) {
  console.log("Nothing to submit.");
} else if (dryRun) {
  console.log("Dry run: not submitting.");
} else {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: toSubmit }),
  });
  // 200 = OK, 202 = accepted (key validation pending); anything else is a failure
  console.log(`IndexNow responded ${res.status} ${res.statusText}`);
  if (res.status !== 200 && res.status !== 202) {
    console.error(await res.text());
    process.exit(1);
  }
}

if (!dryRun) {
  await mkdir(".indexnow-cache", { recursive: true });
  await writeFile(CACHE_FILE, JSON.stringify(current, null, 2));
}
