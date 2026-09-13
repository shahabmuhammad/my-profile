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

export default function Home() {
  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--fg)",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main
        id="top"
        className="max-w-[1160px] mx-auto px-[clamp(18px,4vw,28px)]"
      >
        <Hero />
        <Divider />
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
