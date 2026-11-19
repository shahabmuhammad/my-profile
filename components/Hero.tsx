function Arrow({ className }: { className: string }) {
  return (
    <svg className={`btn-arrow__icon ${className}`} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" fill="none" strokeWidth="1.4" />
    </svg>
  );
}

// One .line per visual line; --i sets the rise stagger. Re-split if the copy changes.
const headline = ["Interfaces, services", "and the pipeline", "that ships them."];

export default function Hero() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="hero__media" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, no optimizer */}
        <img src={`${base}/Muhammad-Shahab.png`} alt="" fetchPriority="high" />
      </div>

      <h1>
        <span className="sr-only">Muhammad Shahab, senior software engineer: </span>
        {headline.map((text, i) => (
          <span className="line" key={text}>
            <span style={{ "--i": i } as React.CSSProperties}>{text}</span>
          </span>
        ))}
      </h1>

      <div className="hero__foot fade-late">
        <div>
          <p className="lede">
            Senior full-stack engineer, 7+ years in production. I&apos;ve built
            a 570-component AI agent platform, real-time mosque signage and
            Stripe payment panels in React, Angular, NestJS and .NET.
          </p>
          <a className="btn-arrow" href="#contact">
            <Arrow className="btn-arrow__icon--in" />
            <span className="btn-arrow__label">Get in touch</span>
            <Arrow className="btn-arrow__icon--out" />
          </a>
        </div>
        <span className="hint">
          Open to senior frontend &amp; full-stack roles
          <br />
          Islamabad · UTC+5
        </span>
      </div>
    </section>
  );
}
