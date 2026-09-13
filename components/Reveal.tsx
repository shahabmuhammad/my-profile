"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export default function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px", amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: Math.min(delay, 0.35),
        ease: [0.3, 0.7, 0.2, 1],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
