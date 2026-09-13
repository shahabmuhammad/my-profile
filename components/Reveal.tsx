"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  as?: "div" | "form";
};

const SAFETY_MS = 1200;

export default function Reveal({
  delay = 0,
  as = "div",
  children,
  ...rest
}: RevealProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Safety net: if the viewport intersection observer never fires
    // (unusual viewport sizes, embedded/network contexts, slow first
    // paint), force content visible instead of leaving it hidden forever.
    timerRef.current = setTimeout(() => setVisible(true), SAFETY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const MotionTag = (as === "form" ? motion.form : motion.div) as React.ComponentType<
    HTMLMotionProps<"div">
  >;

  return (
    <MotionTag
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={visible ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "0px 0px -8% 0px", amount: 0.12 }}
      onViewportEnter={() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setVisible(true);
      }}
      transition={{
        duration: 0.55,
        delay: Math.min(delay, 0.35),
        ease: [0.3, 0.7, 0.2, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
