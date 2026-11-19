"use client";

import { useEffect, useRef, useState } from "react";
import { nav, projects } from "@/lib/data";
import { useTheme } from "@/lib/theme";

const CLOSE_DELAY_MS = 120;

function Chevron() {
  return (
    <svg className="chev" viewBox="0 0 10 10" aria-hidden="true">
      <path d="M1 3l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.4" />
    </svg>
  );
}

export default function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [preview, setPreview] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const workBtn = useRef<HTMLButtonElement>(null);

  // Transparent over the hero photo; solid once the hero has scrolled away.
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector<HTMLElement>(".hero");
      const limit = hero ? hero.offsetHeight - 72 : 80;
      setScrolled(window.scrollY > limit);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const openWork = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setWorkOpen(true);
  };
  const closeWorkSoon = () => {
    closeTimer.current = setTimeout(() => setWorkOpen(false), CLOSE_DELAY_MS);
  };
  const closeAll = () => {
    setWorkOpen(false);
    setMenuOpen(false);
  };

  return (
    <header
      className="site-header fade-late"
      data-scrolled={scrolled || menuOpen}
      onKeyDown={(e) => {
        if (e.key === "Escape" && (workOpen || menuOpen)) {
          closeAll();
          workBtn.current?.focus();
        }
      }}
    >
      <a href="#top" className="brand" onClick={closeAll}>
        Muhammad Shahab
      </a>

      <ul className="menu" id="site-menu" data-open={menuOpen}>
        <li>
          <a href="#about" className="menu-link" onClick={closeAll}>
            About
          </a>
        </li>
        <li
          onMouseEnter={openWork}
          onMouseLeave={closeWorkSoon}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setWorkOpen(false);
          }}
        >
          <button
            ref={workBtn}
            type="button"
            className="menu-link"
            aria-expanded={workOpen}
            aria-controls="dd-work"
            onClick={() => (workOpen ? setWorkOpen(false) : openWork())}
          >
            Work <Chevron />
          </button>
          <div className="panel" id="dd-work" data-open={workOpen}>
            <div>
              {projects.map((p, i) => (
                <a
                  key={p.slug}
                  href={`#${p.slug}`}
                  onMouseEnter={() => setPreview(i)}
                  onFocus={() => setPreview(i)}
                  onClick={closeAll}
                >
                  <strong>{p.title}</strong>
                  <small>{p.short}</small>
                </a>
              ))}
              <div className="panel-sep" />
              <a href="#deep-dive" onClick={closeAll}>
                <strong>Engineering deep-dive</strong>
                <small>How the agent platform is built.</small>
              </a>
            </div>
            <div className="preview" aria-hidden="true">
              {projects.map((p, i) => (
                <div key={p.slug} className="preview-item" data-on={preview === i}>
                  <b>{p.metric.value}</b>
                  <span>{p.metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </li>
        {nav
          .filter((item) => item.href !== "#about")
          .map((item) => (
            <li key={item.href}>
              <a href={item.href} className="menu-link" onClick={closeAll}>
                {item.label}
              </a>
            </li>
          ))}
      </ul>

      <div className="header-actions">
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggle}
          aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.3" />
            <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
          </svg>
        </button>
        <a href="#contact" className="pill" onClick={closeAll}>
          Contact
        </a>
      </div>
    </header>
  );
}
