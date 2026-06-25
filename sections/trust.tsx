"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { Marquee } from "@/components/shared/marquee";
import { TRUST_LOGOS } from "@/constants/content";

export function TrustSection() {
  return (
    <section
      id="trust"
      className="relative border-y border-border/40 bg-muted/20 py-12 md:py-16"
      aria-label="Trusted by companies"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trusted Worldwide"
          title="Powering Security for Industry Leaders"
          align="center"
          className="mb-8 md:mb-10"
        />
      </div>

      <Marquee speed="normal" pauseOnHover className="py-4">
        {TRUST_LOGOS.map((logo) => (
          <div
            key={logo}
            className="flex h-16 min-w-[160px] items-center justify-center rounded-xl border border-border/40 bg-background/60 px-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
          >
            <span className="whitespace-nowrap text-lg font-bold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground">
              {logo}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
