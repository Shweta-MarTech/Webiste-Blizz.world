import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";

const SITE = "https://www.blizz.world";

// Only posts that exist in content/blog are valid; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blizz`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);
  const url = `${SITE}/blog/${post.slug}`;
  const [authorName, ...authorRole] = post.author.split(",");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Person", name: authorName.trim(), jobTitle: authorRole.join(",").trim() || undefined },
        publisher: { "@id": `${SITE}/#organization` },
        mainEntityOfPage: url,
        url,
        image: `${SITE}/opengraph-image`,
        keywords: post.keywords.join(", "),
        inLanguage: "en",
      },
      ...(post.faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: post.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Blizz", item: SITE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-28 pb-20 px-4 sm:px-6">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={14} />
            All guides
          </Link>

          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight text-slate-900">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-slate-500 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>
              By <span className="font-medium text-slate-700">{authorName.trim()}</span>
              {authorRole.length > 0 && `, ${authorRole.join(",").trim()}`}
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={13} />
              {post.readingMinutes} min read
            </span>
          </p>

          <div
            className="blog-prose mt-10"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <aside className="mt-14 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white">
            <h2 className="text-2xl font-bold">See a CRM your team can set up today</h2>
            <p className="mt-3 text-orange-100 leading-relaxed">
              Blizz is a simple, WhatsApp-first CRM for small businesses in India
              and the GCC. Book a free 15-minute demo and we&apos;ll show you how
              your team would use it.
            </p>
            <Link
              href="/#cta"
              data-track="cta_click"
              data-track-label={`Blog: ${post.slug}`}
              className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-white text-orange-600 font-semibold text-sm hover:bg-orange-50 transition-colors"
            >
              Book a free demo
              <ArrowRight size={16} />
            </Link>
          </aside>

          {related.length > 0 && (
            <nav aria-label="More guides" className="mt-14">
              <h2 className="text-lg font-semibold text-slate-900">More guides</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-4">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="block h-full rounded-xl border border-slate-100 p-5 hover:border-orange-200 hover:shadow-sm transition-all"
                    >
                      <p className="font-medium text-slate-900 leading-snug">{p.title}</p>
                      <p className="mt-2 text-xs text-slate-400">{p.readingMinutes} min read</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
