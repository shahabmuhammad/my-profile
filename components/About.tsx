import Reveal from "./Reveal";
import { aboutFacts } from "@/lib/data";

function Tech({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold" style={{ color: "var(--cyan)" }}>
      {children}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="py-[clamp(60px,7vw,88px)] grid gap-[clamp(28px,4vw,64px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]"
    >
      <Reveal className="flex flex-col gap-[22px] min-w-0">
        <span
          className="font-[family-name:var(--font-jetbrains-mono)] text-[11.5px] tracking-[0.1em] uppercase"
          style={{ color: "var(--a2)" }}
        >
          01 / About
        </span>
        <p
          className="m-0 text-[clamp(18px,1.7vw,22px)] leading-[1.55] tracking-[-0.01em] max-w-[62ch]"
          style={{ textWrap: "pretty" }}
        >
          Senior Software Engineer with 7+ years shipping full-stack
          production systems — real-time platforms, admin and payment
          dashboards, and an enterprise AI agent-orchestration platform —
          architected end-to-end across frontend, backend, and
          infrastructure. I own systems from <Tech>React</Tech>/
          <Tech>Angular</Tech>/<Tech>Next.js</Tech> interfaces down through{" "}
          <Tech>NestJS</Tech> and <Tech>.NET</Tech> services. Currently
          deepening backend engineering and going hands-on with{" "}
          <Tech>Retrieval-Augmented Generation</Tech> and agentic AI systems.
          Based in Islamabad, Pakistan, working with distributed teams.
        </p>
      </Reveal>

      <Reveal className="m-0 flex flex-col self-start w-full">
        <dl className="m-0 flex flex-col w-full">
          {aboutFacts.map((fact, i) => (
            <div
              key={fact.label}
              className="flex justify-between gap-4 py-[13px] border-t"
              style={{
                borderColor: "var(--line)",
                borderBottom:
                  i === aboutFacts.length - 1
                    ? "1px solid var(--line)"
                    : undefined,
              }}
            >
              <dt
                className="font-[family-name:var(--font-jetbrains-mono)] text-[11.5px] tracking-[0.06em] uppercase"
                style={{ color: "var(--faint)" }}
              >
                {fact.label}
              </dt>
              <dd
                className="m-0 text-[14px] font-medium text-right"
                style={fact.accent ? { color: "var(--cyan)" } : undefined}
              >
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
