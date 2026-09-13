"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { contactLinks } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="py-[clamp(60px,7vw,88px)] pb-[clamp(64px,8vw,96px)] grid gap-[clamp(30px,4vw,64px)] items-start [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]"
    >
      <Reveal className="flex flex-col gap-7 min-w-0">
        <span
          className="font-[family-name:var(--font-jetbrains-mono)] text-[11.5px] tracking-[0.1em] uppercase"
          style={{ color: "var(--a2)" }}
        >
          06 / Contact
        </span>
        <h2
          className="m-0 font-[family-name:var(--font-archivo)] font-bold text-[clamp(32px,4.4vw,58px)] leading-none tracking-[-0.04em]"
          style={{ textWrap: "balance" }}
        >
          Let&apos;s talk about the role.
        </h2>
        <div className="flex flex-col w-full">
          {contactLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center flex-wrap justify-between gap-x-3.5 gap-y-1.5 py-[17px] border-t text-[16px] transition-colors hover:text-[var(--cyan)]"
              style={{
                borderColor: "var(--line)",
                borderBottom:
                  i === contactLinks.length - 1
                    ? "1px solid var(--line)"
                    : undefined,
              }}
            >
              <span className="min-w-0 break-words">{link.label}</span>
              <span
                className="font-[family-name:var(--font-jetbrains-mono)] text-[12px]"
                style={{ color: "var(--faint)" }}
              >
                {link.kind}
              </span>
            </a>
          ))}
        </div>
      </Reveal>

      <motion.form
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -8% 0px", amount: 0.12 }}
        transition={{ duration: 0.55, ease: [0.3, 0.7, 0.2, 1] }}
        className="flex flex-col gap-4 px-[clamp(18px,4.5vw,28px)] py-[clamp(20px,5vw,30px)] rounded-2xl border"
        style={{ borderColor: "var(--line)", background: "var(--bg2)" }}
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <label className="flex flex-col gap-[7px]">
          <span
            className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.08em] uppercase"
            style={{ color: "var(--faint)" }}
          >
            Name
          </span>
          <input
            type="text"
            placeholder="Your name"
            className="px-3.5 py-3 rounded-[9px] border bg-transparent text-[15px] outline-none min-w-0 transition-colors focus:border-[var(--a1)]"
            style={{ borderColor: "var(--line)" }}
          />
        </label>
        <label className="flex flex-col gap-[7px]">
          <span
            className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.08em] uppercase"
            style={{ color: "var(--faint)" }}
          >
            Email
          </span>
          <input
            type="email"
            placeholder="you@company.com"
            className="px-3.5 py-3 rounded-[9px] border bg-transparent text-[15px] outline-none min-w-0 transition-colors focus:border-[var(--a1)]"
            style={{ borderColor: "var(--line)" }}
          />
        </label>
        <label className="flex flex-col gap-[7px]">
          <span
            className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] tracking-[0.08em] uppercase"
            style={{ color: "var(--faint)" }}
          >
            Message
          </span>
          <textarea
            rows={4}
            placeholder="Role, team, and what you're building."
            className="px-3.5 py-3 rounded-[9px] border bg-transparent text-[15px] resize-y outline-none min-w-0 transition-colors focus:border-[var(--a1)]"
            style={{ borderColor: "var(--line)" }}
          />
        </label>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02, filter: "saturate(1.15)" }}
          className="px-5 py-3.5 border-none rounded-[9px] text-white font-semibold text-[14.5px] cursor-pointer"
          style={{ background: "var(--grad)" }}
        >
          {sent ? "Sent — thanks" : "Send message"}
        </motion.button>
        <span
          className="font-[family-name:var(--font-jetbrains-mono)] text-[11px]"
          style={{ color: "var(--faint)" }}
        >
          Replies within two working days.
        </span>
      </motion.form>
    </section>
  );
}
