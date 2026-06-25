"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  speed = "normal",
  pauseOnHover = true,
}: MarqueeProps) {
  const duration =
    speed === "slow" ? "40s" : speed === "fast" ? "20s" : "30s";

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        pauseOnHover && "[&:hover_.marquee-track]:[animation-play-state:paused]",
        className
      )}
    >
      <div
        className="marquee-track flex shrink-0 gap-8"
        style={{
          animation: `marquee ${duration} linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
