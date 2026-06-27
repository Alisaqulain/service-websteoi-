"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { smoothTransition } from "@/animations/variants";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "left" | "right";
  className?: string;
  delay?: number;
}

export function ScrollReveal({
  children,
  direction = "left",
  className,
  delay = 0,
}: ScrollRevealProps) {
  const offset = direction === "left" ? -40 : 40;

  return (
    <motion.div
      initial={{ opacity: 0, x: offset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ ...smoothTransition, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
