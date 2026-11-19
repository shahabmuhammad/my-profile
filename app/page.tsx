import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import DeepDive from "@/components/DeepDive";
import Learning from "@/components/Learning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/seo";
import { contactLinks } from "@/lib/data";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Shahab",
  url: SITE_URL,
  image: `${SITE_URL}/Muhammad-Shahab.png`,
  jobTitle: "Senior Software Engineer",
  description:
    "Senior Software Engineer with 7+ years shipping full-stack production systems — real-time platforms, admin and payment dashboards, and an enterprise AI agent-orchestration platform.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  sameAs: contactLinks
    .filter((l) => l.kind === "LinkedIn" || l.kind === "GitHub")
    .map((l) => l.href),
  email: contactLinks.find((l) => l.kind === "Email")?.href.replace("mailto:", ""),
  knowsAbout: [
    "React",
    "Angular",
    "Next.js",
    "TypeScript",
    "NestJS",
    ".NET",
    "AI Agent Orchestration",
    "Retrieval-Augmented Generation",
  ],
};

export default function Home() {
  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        minHeight: "100vh",
      }}
    >
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />
      <Hero />
      <main className="max-w-[1160px] mx-auto px-[clamp(18px,4vw,28px)]">
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <DeepDive />
        <Divider />
        <Learning />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
