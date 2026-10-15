import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { CHECKED_ON_ISO, competitors } from "@/data/competitors";

const SITE_URL = "https://www.blizz.world";

export default function sitemap(): MetadataRoute.Sitemap {
  // Every post in content/blog is listed automatically
  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updated,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/travel-agency-crm`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/pharma-crm`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/compare`, lastModified: CHECKED_ON_ISO, changeFrequency: "monthly", priority: 0.8 },
    ...competitors.map((c) => ({
      url: `${SITE_URL}/compare/${c.slug}`,
      lastModified: CHECKED_ON_ISO,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/contact-sales`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...posts,
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
