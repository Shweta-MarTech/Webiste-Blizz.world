import { readFileSync } from "node:fs";
import path from "node:path";
import { getAllPosts, readPost } from "@/lib/blog";

// /llms-full.txt: llms.txt, the pricing file and every blog post in full, as one plain-text
// file AI assistants can read in a single request. Rebuilt on each deploy, so new posts
// in content/blog appear here automatically.
export const dynamic = "force-static";

const SITE = "https://www.blizz.world";

function publicFile(name: string) {
  return readFileSync(path.join(process.cwd(), "public", name), "utf8").trim();
}

export function GET() {
  const posts = getAllPosts().map((post) => {
    const { body } = readPost(post.slug);
    return [
      `# ${post.title}`,
      `URL: ${SITE}/blog/${post.slug}`,
      `Author: ${post.author} · Published: ${post.date}${post.updated !== post.date ? ` · Updated: ${post.updated}` : ""}`,
      "",
      body.trim(),
    ].join("\n");
  });

  const text = [publicFile("llms.txt"), publicFile("pricing.md"), ...posts].join("\n\n---\n\n");
  return new Response(`${text}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
