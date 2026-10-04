import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 pt-10">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-slate-600 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-slate-900 [&_strong]:font-semibold [&_a]:text-orange-600 [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </section>
  );
}

export function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
  children,
}: {
  title: string;
  lastUpdated: string;
  intro: React.ReactNode;
  sections: { id: string; title: string }[];
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
            Legal
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {title}
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: {lastUpdated}
          </p>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">{intro}</p>

          <nav
            aria-label="On this page"
            className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/50 p-5 sm:p-6"
          >
            <p className="text-sm font-semibold text-slate-900 mb-3">
              On this page
            </p>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm list-decimal pl-5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
