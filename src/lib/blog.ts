import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";

// Blog posts are Markdown files in content/blog/<slug>.md with a frontmatter block.
// Adding a file publishes a post: it appears on /blog, in the sitemap, and IndexNow
// notifies Bing after the next deploy.
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  keywords: string[];
  readingMinutes: number;
};

export type Post = PostMeta & {
  html: string;
  faqs: { q: string; a: string }[];
};

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error("Blog post is missing its --- frontmatter block");
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].replace(/^"(.*)"$/, "$1").trim();
  }
  return { data, body: match[2] };
}

// Turns the "## Frequently asked questions" section (**Question?** then answer) into
// question/answer pairs for FAQPage structured data
function extractFaqs(body: string) {
  const section = body.match(/^## Frequently asked questions\s*\n([\s\S]*?)(?=^## |(?![\s\S]))/m)?.[1] ?? "";
  return [...section.matchAll(/^\*\*(.+?)\*\*\s*\n([\s\S]*?)(?=\n\*\*|(?![\s\S]))/gm)].map((m) => ({
    q: m[1].trim(),
    a: m[2].replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\s+/g, " ").trim(),
  }));
}

function toMeta(slug: string, data: Record<string, string>, body: string): PostMeta {
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author ?? "Blizz",
    keywords: [data.primary_keyword, ...(data.secondary_keywords ?? "").split(",")]
      .map((k) => k?.trim())
      .filter(Boolean),
    readingMinutes: Math.max(1, Math.round(body.split(/\s+/).length / 220)),
  };
}

function readPost(slug: string) {
  return parseFrontmatter(readFileSync(path.join(BLOG_DIR, `${slug}.md`), "utf8"));
}

export function getAllPosts(): PostMeta[] {
  return readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const { data, body } = readPost(slug);
      return toMeta(slug, data, body);
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

export function getPost(slug: string): Post | null {
  if (!getAllPosts().some((p) => p.slug === slug)) return null;
  const { data, body } = readPost(slug);
  return {
    ...toMeta(slug, data, body),
    html: marked.parse(body, { async: false }),
    faqs: extractFaqs(body),
  };
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
