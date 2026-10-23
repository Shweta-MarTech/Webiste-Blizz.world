import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { CHECKED_ON_ISO, competitors } from "@/data/competitors";

const SITE_URL = "https://www.blizz.world";

// Last real content change per page (YYYY-MM-DD). Google uses lastmod to decide what to recrawl,
// so update the date when a page's text, pricing or metadata changes.
const PAGE_UPDATED = {
  home: "2026-10-23",
  travel: "2026-10-23",
  pharma: "2026-10-23",
  contactSales: "2026-10-23",
  privacy: "2026-10-23",
  terms: "2026-10-23",
};

export default function sitemap(): MetadataRoute.Sitemap {
  // Every post in content/blog is listed automatically
  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updated,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // The blog index changes whenever a post is added or refreshed
  const blogUpdated = posts.map((p) => p.lastModified).sort().at(-1);

  return [
    { url: SITE_URL, lastModified: PAGE_UPDATED.home, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/travel-agency-crm`, lastModified: PAGE_UPDATED.travel, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/pharma-crm`, lastModified: PAGE_UPDATED.pharma, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/compare`, lastModified: CHECKED_ON_ISO, changeFrequency: "monthly", priority: 0.8 },
    ...competitors.map((c) => ({
      url: `${SITE_URL}/compare/${c.slug}`,
      lastModified: CHECKED_ON_ISO,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/contact-sales`, lastModified: PAGE_UPDATED.contactSales, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, lastModified: blogUpdated, changeFrequency: "weekly", priority: 0.8 },
    ...posts,
    { url: `${SITE_URL}/privacy`, lastModified: PAGE_UPDATED.privacy, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: PAGE_UPDATED.terms, changeFrequency: "yearly", priority: 0.3 },
  ];
}
