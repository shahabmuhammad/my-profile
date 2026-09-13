"use client";

import { motion } from "framer-motion";
import { nav } from "@/lib/data";
import { useTheme } from "@/lib/theme";

export default function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header
      className="sticky top-0 z-[60] flex items-center justify-between gap-3 flex-nowrap px-[clamp(14px,4vw,28px)] py-2 border-b backdrop-blur-[10px]"
      style={{
        borderColor: "var(--line)",
        background: "var(--bg-blur)",
      }}
    >
      <a
        href="#top"
        className="grow-0 shrink basis-auto min-w-0 flex items-center gap-[9px] whitespace-nowrap overflow-hidden min-h-11"
      >
        <span
          className="font-[family-name:var(--font-archivo)] font-bold tracking-[-0.02em] text-[clamp(13.5px,3.4vw,15px)] overflow-hidden text-ellipsis"
        >
          Muhammad Shahab
        </span>
      </a>

      <nav
        className="no-scrollbar grow-0 shrink basis-auto min-w-[90px] ml-auto flex items-center flex-nowrap overflow-x-auto gap-[clamp(12px,3.2vw,22px)] text-[13px]"
        style={{ color: "var(--dim)" }}
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center min-h-11 px-0.5 whitespace-nowrap hover:text-[var(--a2)] transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <motion.button
        onClick={toggle}
        whileHover={{}}
        className="group flex-none flex items-center gap-[7px] min-h-11 px-[13px] whitespace-nowrap rounded-full border font-[family-name:var(--font-jetbrains-mono)] text-[11px] cursor-pointer bg-transparent transition-colors"
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
        <span
          className="w-[7px] h-[7px] rounded-full"
          style={{ background: "var(--grad)" }}
        />
        {theme === "light" ? "Light" : "Dark"}
      </motion.button>
    </header>
  );
}
