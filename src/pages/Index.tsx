import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { ProblemSolution } from "@/components/site/ProblemSolution";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Features } from "@/components/site/Features";
import { Pricing } from "@/components/site/Pricing";
import { TrialCTA } from "@/components/site/TrialCTA";
import { FAQ } from "@/components/site/FAQ";
import { LiveChat } from "@/components/site/LiveChat";
import { Footer } from "@/components/site/Footer";
import { ChatWidget } from "@/components/site/ChatWidget";
import { faqs } from "@/lib/faqs";

const Index = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nitrox Chat — AI Messenger Automation",
    provider: { "@type": "Organization", name: "Nitrox Chat", url: "https://nitroxchat.netlify.app" },
    areaServed: "Worldwide",
    description:
      "24/7 AI sales assistant that replies to Facebook Page messages, answers FAQs, captures leads, and hands off to WhatsApp.",
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nitrox Chat",
    url: "https://nitroxchat.netlify.app",
    logo: "https://nitroxchat.netlify.app/favicon.png",
    sameAs: [
      "https://www.facebook.com/infoNitroxMedia",
      "https://www.instagram.com/nitroxmedia",
    ],
  };
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <Pricing />
      <TrialCTA />
      <FAQ />
      <LiveChat />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default Index;
