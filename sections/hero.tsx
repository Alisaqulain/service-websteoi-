"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/constants/site";
import { HERO_IMAGE, HERO_OVERLAY_IMAGES } from "@/constants/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24 bg-white py-8 sm:py-10 md:py-14 lg:py-16" aria-label="Hero">
      <div className="container mx-auto grid items-start gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <ScrollReveal direction="left" className="order-2 lg:order-1">
          <div className="relative pl-4 pt-4 sm:pl-5 sm:pt-5">
            <div
              className="pointer-events-none absolute left-0 top-0 h-[88%] w-1.5 bg-[#8fa2f4]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-0 top-0 h-1.5 w-[88%] bg-[#8fa2f4]"
              aria-hidden="true"
            />
            <div className="overflow-hidden bg-white">
              <Image
                src={HERO_IMAGE}
                alt={`${SITE.name} — expert procedural support for Karnataka officials`}
                width={1408}
                height={768}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="order-1 lg:order-2">
          <div className="relative lg:pt-6">
            <h1 className="text-[clamp(1.75rem,6vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-black">
              Expert Procedural Support for Karnataka Officials
            </h1>
            <a
              href="#book"
              className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-primary underline decoration-1 underline-offset-4 transition-colors hover:text-primary/80 sm:mt-8 sm:text-lg"
            >
              Book Appointment
              <ArrowUpRight className="size-5 shrink-0" />
            </a>

            <div className="mt-8 flex items-end gap-2 sm:mt-10 sm:gap-3 lg:mt-16">
              {HERO_OVERLAY_IMAGES.map((src, index) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-lg shadow-md sm:rounded-xl"
                  style={{ marginTop: index === 1 ? "0.75rem" : "0" }}
                >
                  <Image
                    src={src}
                    alt=""
                    width={160}
                    height={120}
                    className="h-20 w-24 object-cover grayscale sm:h-28 sm:w-36"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
