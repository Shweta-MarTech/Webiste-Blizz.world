import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection as Section } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Blizz",
  description:
    "The terms that apply when you use the Blizz website and Blizz CRM, including plans, billing, acceptable use and your data.",
  alternates: { canonical: "https://www.blizz.world/terms" },
};

// Blizz is run by its founder as an individual until a company is registered.
// When it is, set operator to the registered name (keep in sync with /privacy).
const COMPANY = {
  operator: "Shweta Bakshi",
  address: "India",
  email: "hello@blizz.world",
  lastUpdated: "4 October 2026",
};

const sections = [
  { id: "agreement", title: "Agreement to these terms" },
  { id: "service", title: "The Blizz service" },
  { id: "accounts", title: "Your account" },
  { id: "plans", title: "Plans, trials and billing" },
  { id: "acceptable-use", title: "Acceptable use" },
  { id: "your-data", title: "Your data" },
  { id: "third-party", title: "Third-party services" },
  { id: "availability", title: "Availability and support" },
  { id: "ip", title: "Our intellectual property" },
  { id: "termination", title: "Cancellation and termination" },
  { id: "liability", title: "Disclaimers and liability" },
  { id: "changes", title: "Changes to these terms" },
  { id: "law", title: "Governing law and disputes" },
  { id: "contact", title: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated={COMPANY.lastUpdated}
      sections={sections}
      intro={
        <>
          These terms explain the rules for using blizz.world and the Blizz
          CRM. We&apos;ve tried to keep them short and in plain language. By
          using Blizz, you agree to them.
        </>
      }
    >
      <Section id="agreement" title="1. Agreement to these terms">
        <p>
          Blizz is operated by <strong>{COMPANY.operator}</strong>, based in{" "}
          {COMPANY.address} (&ldquo;Blizz&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;). These Terms of Service form an agreement between
          us and you, the person or business using Blizz (&ldquo;you&rdquo;).
        </p>
        <p>
          If you use Blizz on behalf of a business, you confirm that you are
          authorised to accept these terms for that business. You must be at
          least 18 years old to use Blizz.
        </p>
        <p>
          Our <Link href="/privacy">Privacy Policy</Link> explains how we handle
          personal data and forms part of these terms.
        </p>
      </Section>

      <Section id="service" title="2. The Blizz service">
        <p>
          Blizz is an online CRM (customer relationship management) tool that
          helps small businesses manage leads, follow-ups, sales pipelines and
          customer conversations, including on WhatsApp.
        </p>
        <p>
          <strong>Blizz is in early access.</strong> We are actively building
          the product, and some features described on our website are still
          in development or available only to beta customers. We will tell you
          which features are available before you pay for a plan, and we may
          add, change or remove features over time.
        </p>
      </Section>

      <Section id="accounts" title="3. Your account">
        <ul>
          <li>Give us accurate information when you sign up, and keep it up to date.</li>
          <li>
            Keep your login details secure. You are responsible for activity
            under your account and your team members&apos; accounts.
          </li>
          <li>
            Account administrators control who on their team can access Blizz
            and what they can see.
          </li>
          <li>
            Tell us straight away at{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> if you think
            your account has been accessed without permission.
          </li>
        </ul>
      </Section>

      <Section id="plans" title="4. Plans, trials and billing">
        <ul>
          <li>
            <strong>Starter (free):</strong> up to 2 users and 500 contacts, with
            no time limit. We may change free plan limits with 30 days&apos;
            notice.
          </li>
          <li>
            <strong>Paid plans</strong> (Pro and Business) are charged per user
            per month, at the prices shown on our website when you subscribe.
            Prices exclude GST, which is added where applicable.
          </li>
          <li>
            <strong>Trials:</strong> if you start a free trial of a paid plan,
            you will not be charged unless you choose to continue after the
            trial ends.
          </li>
          <li>
            <strong>Renewal:</strong> paid plans renew automatically each month
            (or year, for annual billing) until you cancel. Adding users during
            a billing period is charged pro rata.
          </li>
          <li>
            <strong>Price changes:</strong> we will give you at least 30
            days&apos; notice by email before any price increase takes effect
            for your account.
          </li>
          <li>
            <strong>Refunds:</strong> fees already paid are non-refundable,
            except where required by law or where we cannot provide the
            service you paid for. If you cancel, you keep access until the end
            of the period you have paid for.
          </li>
          <li>
            <strong>Late payment:</strong> if a payment fails, we will remind
            you. If it is still unpaid after 15 days, we may move your account
            to the free plan or suspend it.
          </li>
        </ul>
      </Section>

      <Section id="acceptable-use" title="5. Acceptable use">
        <p>You agree not to use Blizz to:</p>
        <ul>
          <li>
            Send spam or unsolicited bulk messages, or contact people who have
            not agreed to hear from you, including in breach of TRAI rules on
            unsolicited commercial communication.
          </li>
          <li>
            Break WhatsApp&apos;s Business and Commerce policies, or any other
            platform&apos;s rules, when messaging through Blizz.
          </li>
          <li>Store or share content that is illegal, fraudulent, abusive or infringes others&apos; rights.</li>
          <li>Collect or use personal data without a lawful basis under the DPDP Act.</li>
          <li>
            Try to access other customers&apos; data, break or test our security
            without permission, or overload or disrupt the service.
          </li>
          <li>Copy, resell or reverse engineer Blizz, or use it to build a competing product.</li>
        </ul>
        <p>
          We may suspend accounts that break these rules, and will tell you why
          unless the law prevents us.
        </p>
      </Section>

      <Section id="your-data" title="6. Your data">
        <ul>
          <li>
            <strong>You own your data.</strong> The leads, contacts, messages
            and other information you put into Blizz belong to you.
          </li>
          <li>
            You give us permission to store and process your data only to
            provide, secure and support the service for you. For your
            customers&apos; personal data, you are the Data Fiduciary and we
            act as your Data Processor, as described in our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </li>
          <li>
            You are responsible for having the right to collect and use the
            personal data you store in Blizz, including consent to contact
            people.
          </li>
          <li>
            <strong>Export:</strong> you can export your data at any time. After
            your account closes, you have 30 days to export it before we
            delete it.
          </li>
        </ul>
      </Section>

      <Section id="third-party" title="7. Third-party services">
        <p>
          Blizz connects with services run by other companies, such as WhatsApp
          (Meta), Google and email providers. Your use of those services is
          also governed by their terms. Messaging charges set by WhatsApp or
          other providers may apply, and we will show any such charges before
          you incur them. We are not responsible for outages or changes made
          by those providers.
        </p>
      </Section>

      <Section id="availability" title="8. Availability and support">
        <p>
          We work hard to keep Blizz available and your data safe, and we take
          regular backups. However, we do not guarantee that the service will
          always be available or error-free, particularly during early access.
          We will try to give advance notice of planned maintenance.
        </p>
        <p>
          Support is available by email at{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>, and by
          WhatsApp for paid plans.
        </p>
      </Section>

      <Section id="ip" title="9. Our intellectual property">
        <p>
          Blizz, its software, design, logo and content belong to us. We give
          you a limited, non-transferable right to use Blizz for your business
          while your account is active. If you send us feedback or
          suggestions, we may use them to improve Blizz without any obligation
          to you.
        </p>
      </Section>

      <Section id="termination" title="10. Cancellation and termination">
        <ul>
          <li>You can cancel your plan or close your account at any time from your account settings or by emailing us.</li>
          <li>
            We may suspend or close your account if you seriously or
            repeatedly break these terms, if required by law, or if a paid
            account remains unpaid. Where possible, we will warn you first and
            give you time to export your data.
          </li>
          <li>
            Sections 6 (Your data), 9, 11 and 13 continue to apply after your
            account closes.
          </li>
        </ul>
      </Section>

      <Section id="liability" title="11. Disclaimers and liability">
        <p>
          Blizz is provided &ldquo;as is&rdquo;. To the extent the law allows, we
          do not give warranties that Blizz will meet every requirement of your
          business.
        </p>
        <p>
          To the extent the law allows, we are not liable for indirect or
          consequential losses, such as lost profits, lost business or lost
          opportunities. Our total liability to you for any claim is limited
          to the amount you paid us in the 12 months before the claim. Nothing
          in these terms limits liability that cannot be limited by law.
        </p>
        <p>
          You agree to compensate us for losses caused by your breach of these
          terms or your unlawful use of Blizz, including messages you send to
          your customers.
        </p>
      </Section>

      <Section id="changes" title="12. Changes to these terms">
        <p>
          We may update these terms as Blizz grows. We will change the
          &ldquo;Last updated&rdquo; date above and, for significant changes,
          email account holders at least 15 days before they take effect. If
          you continue to use Blizz after that, the new terms apply.
        </p>
      </Section>

      <Section id="law" title="13. Governing law and disputes">
        <p>
          These terms are governed by the laws of India. If you have a
          concern, please contact us first. Most issues can be resolved
          quickly by talking to us. If we cannot resolve a dispute within 30
          days, it will be subject to the jurisdiction of the courts of India.
        </p>
      </Section>

      <Section id="contact" title="14. Contact">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm space-y-1">
          <p>
            <strong>Blizz</strong>, operated by {COMPANY.operator}
          </p>
          <p>{COMPANY.address}</p>
          <p>
            Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </p>
        </div>
      </Section>
    </LegalPage>
  );
}
