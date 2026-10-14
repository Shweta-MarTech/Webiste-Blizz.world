import type { Metadata } from "next";

// A page that sets openGraph replaces the root layout's openGraph completely, share image
// included, and a page without twitter tags shows the homepage title. Build both here so
// every page keeps its own title and the preview card on WhatsApp, LinkedIn and X.
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Blizz — WhatsApp-native CRM for small businesses",
};

type SocialInput = {
  title: string;
  description: string;
  path: string;
  // Extra Open Graph fields, e.g. type "article" with publishedTime for blog posts
  openGraph?: Metadata["openGraph"];
};

export function socialMeta({ title, description, path, openGraph }: SocialInput): Metadata {
  return {
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Blizz",
      type: "website",
      locale: "en_IN",
      images: [shareImage],
      ...openGraph,
    } as Metadata["openGraph"],
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [shareImage.url],
    },
  };
}
