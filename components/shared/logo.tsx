import { Shield } from "lucide-react";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const iconSizes = { sm: "size-7", md: "size-9", lg: "size-11" };
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
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent p-1.5 shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105",
          iconSizes[size]
        )}
      >
        <Shield className="size-full text-primary-foreground" strokeWidth={2.5} />
      </div>
      {showText && (
        <span className={cn("font-bold tracking-tight text-foreground", textSizes[size])}>
          {SITE.name}
        </span>
      )}
    </a>
  );
}
