"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { deepDive } from "@/lib/data";

export default function DeepDive() {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true });
  const openCount = Object.values(open).filter(Boolean).length;
  const allOpen = openCount === deepDive.length;

  const toggle = (i: number) =>
    setOpen((s) => ({ ...s, [i]: !s[i] }));

  const toggleAll = () => {
    const next: Record<number, boolean> = {};
    deepDive.forEach((_, i) => {
      next[i] = !allOpen;
    });
    setOpen(next);
  };

  return (
    <section id="deep-dive" className="py-[clamp(60px,7vw,88px)]">
      <Reveal className="flex flex-wrap items-end justify-between gap-5 mb-[38px]">
        <div className="flex flex-col gap-4 max-w-[56ch]">
          <span
            className="font-[family-name:var(--font-mono)] text-[11.5px] tracking-[0.1em] uppercase"
            style={{ color: "var(--a2)" }}
          >
            04 / Technical deep-dive
          </span>
          <h2 className="m-0 font-[family-name:var(--font-display)] font-normal text-[clamp(30px,3.6vw,46px)] leading-[1.04] tracking-[-0.02em]">
            Inside the Agent Orchestrator
          </h2>
          <p
            className="m-0 text-[15.5px] leading-[1.55]"
            style={{ color: "var(--dim)", textWrap: "pretty" }}
          >
            Seven specific systems from the platform. Open any one for the
            engineering detail.
          </p>
        </div>
        <button
          onClick={toggleAll}
          className="px-[15px] py-2.5 rounded-[9px] border font-[family-name:var(--font-mono)] text-[11.5px] tracking-[0.04em] cursor-pointer bg-transparent transition-colors"
          style={{ borderColor: "var(--line)", color: "var(--dim)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--a1)";
            e.currentTarget.style.color = "var(--fg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--line)";
            e.currentTarget.style.color = "var(--dim)";
          }}
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      </Reveal>

      <div className="flex flex-col gap-2.5">
        {deepDive.map((item, i) => {
          const isOpen = !!open[i];
          return (
            <Reveal
              key={item.title}
              className="rounded-[13px] border overflow-hidden transition-colors"
              style={{ borderColor: "var(--line)", background: "var(--bg2)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--a1-line)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--line)";
              }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full grid items-start gap-[clamp(9px,2.5vw,14px)] px-[clamp(15px,4vw,22px)] py-[clamp(15px,4vw,19px)] bg-transparent border-none text-left cursor-pointer [grid-template-columns:clamp(22px,6vw,34px)_minmax(0,1fr)_22px]"
              >
                <span
                  className="font-[family-name:var(--font-mono)] text-[11.5px]"
                  style={{ color: "var(--a2)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-medium text-[17px] tracking-[-0.015em]"
                  style={{ textWrap: "pretty" }}
                >
                  {item.title}
                </span>
                <span
                  className="font-[family-name:var(--font-mono)] text-[16px] text-right"
                  style={{ color: "var(--dim)" }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.34, ease: [0.3, 0.7, 0.2, 1] },
                      opacity: { duration: 0.26 },
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-[clamp(15px,4vw,22px)] pb-[clamp(16px,4vw,22px)] pl-[clamp(15px,4.5vw,70px)] flex flex-col gap-3">
                      <p
                        className="m-0 text-[15px] leading-[1.6] max-w-[76ch]"
                        style={{ textWrap: "pretty" }}
                      >
                        {item.body}
                      </p>
                      {item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-[family-name:var(--font-mono)] text-[11px] px-2 py-1 rounded-[5px]"
                              style={{
                                background: "var(--chip)",
                                color: "var(--dim)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {item.budget && (
                        <div
                          className="flex flex-wrap gap-px w-fit rounded-[10px] border overflow-hidden"
                          style={{
                            background: "var(--line)",
                            borderColor: "var(--line)",
                          }}
                        >
                          {item.budget.map((b) => (
                            <div
                              key={b.label}
                              className="flex flex-col gap-px px-[clamp(12px,3.5vw,16px)] py-[clamp(9px,2.5vw,11px)]"
                              style={{ background: "var(--bg)" }}
                            >
                              <span
                                className="font-[family-name:var(--font-mono)] text-[16px]"
                                style={{ color: "var(--a-num)" }}
                              >
                                {b.value}
                              </span>
                              <span
                                className="font-[family-name:var(--font-mono)] text-[9.5px] tracking-[0.07em] uppercase"
                                style={{ color: "var(--faint)" }}
                              >
                                {b.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
