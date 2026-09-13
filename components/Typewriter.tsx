"use client";

import { useEffect, useState } from "react";

type Segment = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** Insert a line break after this segment. */
  break?: boolean;
};

export default function Typewriter({
  segments,
  speed = 28,
  startDelay = 150,
}: {
  segments: Segment[];
  speed?: number;
  startDelay?: number;
}) {
  const totalLength = segments.reduce((n, s) => n + s.text.length, 0);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduced =
      typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setCount(totalLength);
      setDone(true);
      return;
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval> | null = null;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= totalLength) {
          if (interval) clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalLength, speed, startDelay]);

  let consumed = 0;
  let activeIndex = segments.length - 1;
  for (let i = 0; i < segments.length; i++) {
    if (count < consumed + segments[i].text.length || i === segments.length - 1) {
      activeIndex = i;
      break;
    }
    consumed += segments[i].text.length;
  }

  let remaining = count;
  return (
    <>
      {segments.map((seg, i) => {
        const shown = seg.text.slice(0, Math.max(0, remaining));
        remaining -= seg.text.length;
        return (
          <span key={i} className={seg.className} style={seg.style}>
            {shown}
            {i === activeIndex && !done && (
              <span
                aria-hidden
                className="inline-block w-[0.06em] ml-1 align-[-0.08em] animate-pulse"
                style={{ height: "0.85em", background: "currentColor" }}
              />
            )}
            {seg.break && <br />}
          </span>
        );
      })}
    </>
  );
}
