import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { formatDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "CRM Blog for Small Businesses in India & GCC | Blizz",
  description:
    "Practical guides on choosing, setting up and using a CRM for small businesses and sales teams in India and the GCC.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Blizz Blog — CRM guides for small businesses",
    description:
      "Practical guides on choosing, setting up and using a CRM for small businesses and sales teams in India and the GCC.",
    url: "/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Blog</p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              CRM guides for small businesses
            </h1>
            <p className="mt-4 text-lg text-slate-500 leading-relaxed">
              Practical advice on choosing, setting up and actually using a CRM,
              written for small sales teams in India and the GCC.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex flex-col"
              >
                <p className="text-xs text-slate-400 flex items-center gap-2">
                  {formatDate(post.date)}
                  <span aria-hidden="true">·</span>
                  <Clock size={12} />
                  {post.readingMinutes} min read
                </p>
                <h2 className="mt-3 text-lg font-semibold text-slate-900 leading-snug group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed flex-1">{post.description}</p>
                <p className="mt-5 text-sm font-medium text-orange-600 flex items-center gap-1">
                  Read the guide
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
