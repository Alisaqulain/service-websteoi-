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
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...smoothTransition, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
