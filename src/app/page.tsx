import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { WhatsAppSection } from "@/components/WhatsAppSection";
import { Addons } from "@/components/Addons";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Comparison } from "@/components/Comparison";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <Problem />
        <Features />
        <Addons />
        <WhatsAppSection />
        <Pricing />
        <Comparison />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
