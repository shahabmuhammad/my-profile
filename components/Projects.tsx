"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-[clamp(60px,7vw,88px)]">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-[18px] mb-11">
        <div className="flex flex-col gap-4">
          <span
            className="font-[family-name:var(--font-mono)] text-[11.5px] tracking-[0.1em] uppercase"
            style={{ color: "var(--a2)" }}
          >
            03 / Featured projects
          </span>
          <h2 className="m-0 font-[family-name:var(--font-display)] font-normal text-[clamp(30px,3.6vw,46px)] leading-[1.04] tracking-[-0.02em]">
            Systems I built full-stack
          </h2>
        </div>
        <span
          className="font-[family-name:var(--font-mono)] text-[11.5px]"
          style={{ color: "var(--faint)" }}
        >
          frontend → backend → CI
        </span>
      </Reveal>

      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]">
        {projects.map((project) => {
          const flagship = !!project.flagship;
          return (
            <Reveal key={project.slug} id={project.slug}>
              <motion.article
                whileHover={{ y: -5, scale: 1.006 }}
                transition={{ type: "spring", stiffness: 340, damping: 26 }}
                className="flex flex-col gap-[22px] px-[clamp(18px,4.5vw,26px)] pt-[clamp(20px,5vw,28px)] pb-[clamp(22px,5vw,30px)] rounded-2xl border h-full"
                style={{
                  borderColor: flagship ? "var(--f-line)" : "var(--line)",
                  background: "var(--bg2)",
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = flagship
                    ? "0 18px 42px var(--f-glow)"
                    : "0 18px 42px var(--a1-glow)";
                  e.currentTarget.style.borderColor = flagship
                    ? "var(--f1)"
                    : "var(--a1-line)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = flagship
                    ? "var(--f-line)"
                    : "var(--line)";
                }}
              >
                <div className="flex items-start justify-between gap-3.5">
                  <div className="flex flex-col gap-1.5 min-w-0">
                    <span
                      className="flex flex-wrap items-center gap-2 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.08em] uppercase"
                      style={{ color: "var(--faint)" }}
                    >
                      {project.caseStudy}
                      {flagship && (
                        <span
                          className="px-[7px] py-[3px] rounded text-white tracking-[0.06em]"
                          style={{ background: "var(--f-grad)" }}
                        >
                          flagship
                        </span>
                      )}
                    </span>
                    <h3
                      className="m-0 font-medium text-[21px] tracking-[-0.015em]"
                      style={{ textWrap: "balance" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div
                    className="flex-none flex flex-col items-center gap-px px-[13px] py-[9px] rounded-[10px] border"
                    style={{
                      borderColor: flagship ? "var(--f-line)" : "var(--a1-line)",
                      background: flagship ? "var(--f-tint)" : "var(--a1-tint)",
                    }}
                  >
                    <Counter
                      value={project.metric.value}
                      className="font-[family-name:var(--font-mono)] text-[19px] leading-[1.1] tracking-[-0.02em]"
                      style={{ color: flagship ? "var(--f1)" : "var(--a-num)" }}
                    />
                    <span
                      className="font-[family-name:var(--font-mono)] text-[9.5px] tracking-[0.08em] uppercase"
                      style={{ color: "var(--faint)" }}
                    >
                      {project.metric.label}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-[5px]">
                    <span
                      className="font-[family-name:var(--font-mono)] text-[10.5px] tracking-[0.09em] uppercase"
                      style={{ color: "var(--faint)" }}
                    >
                      What it does
                    </span>
                    <p
                      className="m-0 text-[15px] leading-[1.5]"
                      style={{ textWrap: "pretty" }}
                    >
                      {project.what}
                    </p>
                  </div>

                  {project.stack && (
                    <div className="flex flex-col gap-[7px]">
                      <span
                        className="font-[family-name:var(--font-mono)] text-[10.5px] tracking-[0.09em] uppercase"
                        style={{ color: "var(--faint)" }}
                      >
                        Stack
                      </span>
                      <p
                        className="m-0 text-[14.5px] leading-[1.55]"
                        style={{ color: "var(--dim)", textWrap: "pretty" }}
                      >
                        {project.stack}
                      </p>
                    </div>
                  )}

                  {project.ownership && (
                    <div className="flex flex-col gap-[7px]">
                      <span
                        className="font-[family-name:var(--font-mono)] text-[10.5px] tracking-[0.09em] uppercase"
                        style={{ color: "var(--faint)" }}
                      >
                        Ownership
                      </span>
                      <div className="flex flex-col gap-1.5">
                        <p className="m-0 text-[14.5px] leading-[1.5]">
                          <span
                            className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.06em] uppercase mr-2"
                            style={{ color: "var(--cyan)" }}
                          >
                            FE
                          </span>
                          {project.ownership.fe}
                        </p>
                        <p className="m-0 text-[14.5px] leading-[1.5]">
                          <span
                            className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.06em] uppercase mr-2"
                            style={{ color: "var(--cyan)" }}
                          >
                            BE
                          </span>
                          {project.ownership.be}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-[9px]">
                    <span
                      className="font-[family-name:var(--font-mono)] text-[10.5px] tracking-[0.09em] uppercase"
                      style={{ color: "var(--faint)" }}
                    >
                      Highlights
                    </span>
                    <ul className="m-0 p-0 list-none flex flex-col gap-[9px]">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="grid gap-[9px] text-[14.5px] leading-[1.5] [grid-template-columns:16px_minmax(0,1fr)]"
                          style={{ textWrap: "pretty" }}
                        >
                          <span
                            className="font-[family-name:var(--font-mono)] text-[12px] leading-[1.8]"
                            style={{ color: flagship ? "var(--f1)" : "var(--a2)" }}
                          >
                            →
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.link && (
                    <a
                      href={project.link.href}
                      className="w-fit font-[family-name:var(--font-mono)] text-[12px] tracking-[0.04em] border-b pb-0.5"
                      style={{ color: "var(--f1)", borderColor: "var(--f-line)" }}
                    >
                      {project.link.label}
                    </a>
                  )}
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
