import Image from "next/image";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-11 w-auto sm:h-12",
  md: "h-12 w-auto sm:h-14 md:h-[56px]",
  lg: "h-14 w-auto sm:h-16 md:h-[64px]",
};

export function Logo({ className, showText = false, size = "md" }: LogoProps) {
  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  };

  return (
    <a
      href="#home"
      className={cn("group flex shrink-0 items-center gap-2.5", className)}
      aria-label={`${SITE.name} home`}
    >
      <Image
        src="/logo.webp"
        alt={`${SITE.name} logo`}
        width={120}
        height={120}
        priority
        className={cn(
          "transition-transform duration-300 group-hover:scale-105",
          sizeClasses[size]
        )}
      />
      {showText && (
        <span className={cn("font-bold tracking-tight text-black", textSizes[size])}>
          {SITE.name}
        </span>
      )}
    </a>
  );
}
