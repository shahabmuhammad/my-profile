import Reveal from "./Reveal";
import { learning } from "@/lib/data";

export default function Learning() {
  return (
    <section id="learning" className="py-[clamp(60px,7vw,88px)]">
      <Reveal
        className="rounded-[18px] border px-[clamp(20px,3.5vw,36px)] py-[clamp(24px,4vw,40px)]"
        style={{ borderColor: "var(--cyan-line)", background: "var(--cyan-tint)" }}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-[30px]">
          <div className="flex flex-col gap-3.5">
            <span
              className="font-[family-name:var(--font-mono)] text-[11.5px] tracking-[0.1em] uppercase"
              style={{ color: "var(--cyan)" }}
            >
              05 / Currently learning
            </span>
            <h2
              className="m-0 font-[family-name:var(--font-display)] font-normal text-[clamp(26px,3vw,38px)] leading-[1.04] tracking-[-0.02em] max-w-[34ch]"
              style={{ textWrap: "balance" }}
            >
              Going deeper on the AI and backend side
            </h2>
          </div>
          <span
            className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-[11.5px]"
            style={{ color: "var(--dim)" }}
          >
            <span
              className="blip w-[7px] h-[7px] rounded-full"
              style={{ background: "var(--cyan)" }}
            />
            in progress · Sep 2026
          </span>
        </div>

        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr))]">
          {learning.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 pt-4 border-t-2"
              style={{ borderColor: "var(--cyan)" }}
            >
              <h3 className="m-0 font-medium text-[17px] tracking-[-0.015em]">
                {item.title}
              </h3>
              <p
                className="m-0 text-[14.5px] leading-[1.5]"
                style={{ color: "var(--dim)", textWrap: "pretty" }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
