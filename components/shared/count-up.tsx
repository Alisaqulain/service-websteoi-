"use client";

import { useCounter } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  className,
  decimals = 0,
}: CountUpProps) {
  const { count, ref } = useCounter(end, duration);

  const displayValue =
    decimals > 0
      ? (count / Math.pow(10, decimals)).toFixed(decimals)
      : count.toLocaleString();

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
