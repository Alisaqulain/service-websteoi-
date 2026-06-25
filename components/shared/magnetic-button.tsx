"use client";

import { useMagnetic } from "@/hooks/use-scroll";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonProps {
  magneticStrength?: number;
}

export function MagneticButton({
  magneticStrength = 0.25,
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const ref = useMagnetic(magneticStrength);

  return (
    <Button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={cn("transition-transform duration-200 ease-out", className)}
      {...props}
    >
      {children}
    </Button>
  );
}
