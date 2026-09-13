"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Counter from "./Counter";
import ParticleField from "./ParticleField";
import Typewriter from "./Typewriter";
import { heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-[clamp(76px,9vw,116px)] pb-[clamp(64px,8vw,96px)]">
      <ParticleField />
      <div className="relative grid gap-[clamp(28px,4vw,56px)] items-start [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <div className="flex flex-col gap-8 min-w-0">
          <Reveal
            className="flex items-center gap-[10px] max-w-full w-fit py-1.5 pl-[11px] pr-[13px] rounded-full border font-[family-name:var(--font-jetbrains-mono)] text-[11.5px] tracking-[0.06em] uppercase"
            style={{
              borderColor: "var(--a1-line)",
              background: "var(--a1-tint)",
              color: "var(--fg)",
            }}
          >
            <span
              className="blip w-[7px] h-[7px] rounded-full"
              style={{ background: "var(--cyan)" }}
            />
            Open to senior frontend &amp; full-stack roles
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="m-0 font-[family-name:var(--font-archivo)] font-extrabold text-[clamp(46px,7.2vw,100px)] leading-[0.92] tracking-[-0.045em]">
              Muhammad
              <br />
              <span className="gradient-text">Shahab</span>
            </h1>
          </Reveal>

          <p className="m-0 max-w-[32ch] text-[clamp(19px,2.1vw,27px)] leading-[1.35] tracking-[-0.015em]">
            <Typewriter
              segments={[
                {
                  text: "I ship full-stack production systems end-to-end — real-time platforms, payment and admin dashboards, and an enterprise ",
                },
                {
                  text: "AI agent-orchestration platform",
                  style: { color: "var(--cyan)" },
                },
                { text: "." },
              ]}
              speed={16}
              startDelay={350}
            />
          </p>

          <Reveal
            delay={0.15}
            className="flex flex-wrap items-center gap-3.5"
          >
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.025,
                filter: "saturate(1.15)",
              }}
              className="px-[clamp(18px,5vw,24px)] py-3.5 rounded-[9px] font-semibold text-[14.5px] text-white"
              style={{ background: "var(--grad)" }}
            >
              Get in touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{}}
              className="px-[clamp(16px,4.5vw,22px)] py-3.5 rounded-[9px] border text-[14.5px] transition-colors"
              style={{ borderColor: "var(--line)", color: "var(--dim)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--a2)";
                e.currentTarget.style.color = "var(--fg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.color = "var(--dim)";
              }}
            >
              See featured work
            </motion.a>
            <span
              className="font-[family-name:var(--font-jetbrains-mono)] text-[12px]"
              style={{ color: "var(--faint)" }}
            >
              Islamabad, PK · UTC+5
            </span>
          </Reveal>

          <Reveal
            delay={0.2}
            className="flex flex-wrap gap-px w-fit rounded-[11px] border overflow-hidden"
            style={{ background: "var(--line)", borderColor: "var(--line)" }}
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-0.5 px-[clamp(14px,4vw,20px)] py-[clamp(11px,3vw,14px)]"
                style={{ background: "var(--bg2)" }}
              >
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[22px] tracking-[-0.02em]">
                  {stat.count ? (
                    <Counter value={stat.value as number} />
                  ) : (
                    stat.value
                  )}
                </span>
                <span
                  className="font-[family-name:var(--font-jetbrains-mono)] text-[10.5px] tracking-[0.07em] uppercase"
                  style={{ color: "var(--faint)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal
          delay={0.1}
          className="w-[min(100%,240px)] mx-auto sm:mx-0 sm:justify-self-end"
        >
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border"
            style={{ borderColor: "var(--line-strong)" }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Muhammad-Shahab.png`}
              alt="Muhammad Shahab"
              fill
              priority
              sizes="(max-width: 640px) 70vw, 240px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
