import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieSettingsButton } from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Privacy Policy — Blizz",
  description:
    "How Blizz collects, uses and protects your personal data, in line with India's Digital Personal Data Protection Act, 2023.",
  alternates: { canonical: "https://www.blizz.world/privacy" },
};

// Blizz is run by its founder as an individual until a company is registered.
// When it is, set operator to the registered name and address to the registered office.
const COMPANY = {
  operator: "Shweta Bakshi",
  address: "India",
  email: "hello@blizz.world",
  grievanceOfficer: "Shweta Bakshi",
  lastUpdated: "3 October 2026",
};

const sections = [
  { id: "who-we-are", title: "Who we are" },
  { id: "data-we-collect", title: "Data we collect" },
  { id: "how-we-use", title: "How we use your data" },
  { id: "cookies", title: "Cookies and analytics" },
  { id: "sharing", title: "Who we share data with" },
  { id: "customer-data", title: "Data you store in Blizz CRM" },
  { id: "retention", title: "How long we keep data" },
  { id: "security", title: "How we protect data" },
  { id: "your-rights", title: "Your rights" },
  { id: "children", title: "Children" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact and grievances" },
];

function Section({
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

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
            Legal
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: {COMPANY.lastUpdated}
          </p>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            This policy explains what personal data Blizz collects when you
            visit blizz.world or use the Blizz CRM, why we collect it, and the
            choices you have. We follow India&apos;s Digital Personal Data
            Protection Act, 2023 (&ldquo;DPDP Act&rdquo;).
          </p>

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

          <Section id="who-we-are" title="1. Who we are">
            <p>
              Blizz is operated by <strong>{COMPANY.operator}</strong>, based in{" "}
              {COMPANY.address} (&ldquo;Blizz&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;). For the personal data described in this policy
              we act as the <strong>Data Fiduciary</strong> under the DPDP Act,
              except for data our customers store in the CRM (see section 6).
            </p>
          </Section>

          <Section id="data-we-collect" title="2. Data we collect">
            <ul>
              <li>
                <strong>Information you give us:</strong> your name, work
                email, phone number, company name and team size when you
                request a demo, sign up, contact us on WhatsApp or email us.
              </li>
              <li>
                <strong>Account information:</strong> if you sign up for Blizz
                CRM, your login details (including your Google account name and
                email if you sign in with Google) and your plan and billing
                details. Card and UPI payments are handled by our payment
                provider; we do not store full card numbers.
              </li>
              <li>
                <strong>Usage information:</strong> pages you visit, links you
                click, device and browser type, approximate location (city
                level) and how you arrived at our site — only if you accept
                analytics cookies (see section 4).
              </li>
            </ul>
          </Section>

          <Section id="how-we-use" title="3. How we use your data">
            <p>We use your personal data only for these purposes:</p>
            <ul>
              <li>To respond to your demo request or question.</li>
              <li>To create and run your Blizz account and provide support.</li>
              <li>
                To send you product updates and helpful content by email or
                WhatsApp. You can opt out anytime using the unsubscribe link or
                by replying &ldquo;STOP&rdquo;.
              </li>
              <li>To understand how our website is used and improve it.</li>
              <li>To bill you and meet our legal and tax obligations.</li>
              <li>To keep our services secure and prevent misuse.</li>
            </ul>
            <p>
              We process your data based on the consent you give us, or for
              legitimate uses permitted under the DPDP Act, such as providing a
              service you asked for or complying with the law.{" "}
              <strong>We never sell your personal data.</strong>
            </p>
          </Section>

          <Section id="cookies" title="4. Cookies and analytics">
            <p>
              We use a small number of cookies and similar technologies on
              blizz.world:
            </p>
            <ul>
              <li>
                <strong>Essential:</strong> remembers your cookie choice. This
                is always on and contains no personal data.
              </li>
              <li>
                <strong>Analytics (only with your consent):</strong> Google
                Analytics 4 measures visits and which pages are useful, and
                Microsoft Clarity shows us anonymised heatmaps and session
                recordings so we can fix confusing parts of the site. Clarity
                masks text you type into forms.
              </li>
            </ul>
            <p>
              Analytics only run if you click <strong>Accept</strong> on our
              cookie banner. You can change your choice at any time:{" "}
              <span className="inline-block text-orange-600 font-medium underline underline-offset-2">
                <CookieSettingsButton />
              </span>
              .
            </p>
          </Section>

          <Section id="sharing" title="5. Who we share data with">
            <p>
              We share personal data only with service providers that help us
              run Blizz, under contracts that require them to protect it and use
              it only on our instructions:
            </p>
            <ul>
              <li>Hosting and infrastructure: Vercel, Railway, Cloudflare</li>
              <li>Analytics (with consent): Google, Microsoft</li>
              <li>Email delivery: SendGrid</li>
              <li>Messaging: Meta (WhatsApp Business Platform)</li>
              <li>Payments: our payment gateway provider</li>
            </ul>
            <p>
              Some of these providers store data outside India. Where they do,
              we only transfer data to countries not restricted by the
              Government of India under the DPDP Act. We may also disclose data
              if required by law or a valid order from a government authority.
            </p>
          </Section>

          <Section id="customer-data" title="6. Data you store in Blizz CRM">
            <p>
              When a business uses Blizz CRM, it may store details of its own
              leads and customers (for example names, phone numbers and
              WhatsApp conversations). For that data,{" "}
              <strong>the business is the Data Fiduciary</strong> and Blizz is
              its <strong>Data Processor</strong>: we process it only to
              provide the service and on the business&apos;s instructions.
            </p>
            <p>
              Each business&apos;s data is kept separate from every other
              business. If you are a lead or customer of a business that uses
              Blizz, please contact that business directly to exercise your
              rights; we will help them respond.
            </p>
          </Section>

          <Section id="retention" title="7. How long we keep data">
            <ul>
              <li>
                <strong>Demo and contact requests:</strong> up to 24 months
                after our last interaction, unless you become a customer.
              </li>
              <li>
                <strong>Account data:</strong> for as long as your account is
                active. After you close your account, we delete or anonymise it
                within 90 days, except records we must keep by law (such as
                invoices, kept for 8 years under Indian tax law).
              </li>
              <li>
                <strong>Analytics data:</strong> up to 14 months.
              </li>
            </ul>
          </Section>

          <Section id="security" title="8. How we protect data">
            <p>
              We use reasonable security safeguards, including encryption in
              transit (HTTPS) and at rest, role-based access controls, and
              audit logs. No system is perfectly secure, but if a personal data
              breach occurs we will inform affected users and the Data
              Protection Board of India as required by the DPDP Act.
            </p>
          </Section>

          <Section id="your-rights" title="9. Your rights">
            <p>Under the DPDP Act, you have the right to:</p>
            <ul>
              <li>Get a summary of the personal data we hold about you.</li>
              <li>Correct, complete or update your personal data.</li>
              <li>Have your personal data erased.</li>
              <li>
                Withdraw your consent at any time — as easily as you gave it.
                This does not affect processing already done.
              </li>
              <li>Nominate another person to exercise your rights.</li>
              <li>Have your grievances addressed (see section 12).</li>
            </ul>
            <p>
              To use any of these rights, email us at{" "}
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We will
              respond within 30 days.
            </p>
          </Section>

          <Section id="children" title="10. Children">
            <p>
              Blizz is a business tool and is not meant for anyone under 18. We
              do not knowingly collect personal data from children. If you
              believe a child has given us their data, contact us and we will
              delete it.
            </p>
          </Section>

          <Section id="changes" title="11. Changes to this policy">
            <p>
              We may update this policy as our product and the law change. We
              will change the &ldquo;Last updated&rdquo; date above and, for
              significant changes, notify customers by email or in the app.
            </p>
          </Section>

          <Section id="contact" title="12. Contact and grievances">
            <p>
              For questions, requests or complaints about your personal data,
              contact our Grievance Officer:
            </p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm space-y-1">
              <p>
                <strong>{COMPANY.grievanceOfficer}</strong>, Grievance Officer
              </p>
              <p>Blizz</p>
              <p>{COMPANY.address}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </p>
            </div>
            <p>
              We will acknowledge your complaint within 48 hours and aim to
              resolve it within 30 days. If you are not satisfied with our
              response, you may complain to the Data Protection Board of India.
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
