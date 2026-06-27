import Image from "next/image";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const imageSizes = { sm: 28, md: 36, lg: 44 };

export function Logo({ className, showText = false, size = "md" }: LogoProps) {
  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <a
      href="#home"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label={`${SITE.name} home`}
    >
      <Image
        src="/logo.webp"
        alt={`${SITE.name} logo`}
        width={imageSizes[size]}
        height={imageSizes[size]}
        className="h-auto w-auto transition-transform duration-300 group-hover:scale-105"
        priority
      />
      {showText && (
        <span className={cn("font-bold tracking-tight text-foreground", textSizes[size])}>
          {SITE.name}
        </span>
      )}
    </a>
  );
}
