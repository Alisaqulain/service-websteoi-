"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/constants/site";
import { HERO_IMAGE, HERO_OVERLAY_IMAGES } from "@/constants/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function HeroSection() {
  return (
    <section id="home" className="bg-white py-10 md:py-14 lg:py-16" aria-label="Hero">
      <div className="container mx-auto grid items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <ScrollReveal direction="left">
          <div className="relative pl-5 pt-5">
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

        <ScrollReveal direction="right">
          <div className="relative lg:pt-6">
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-black">
              Expert Procedural Support for Karnataka Officials
            </h1>
            <a
              href="#book"
              className="mt-8 inline-flex items-center gap-1.5 text-lg font-semibold text-primary underline decoration-1 underline-offset-4 transition-colors hover:text-primary/80"
            >
              Book Appointment
              <ArrowUpRight className="size-5" />
            </a>

            <div className="mt-10 flex items-end gap-3 lg:mt-16">
              {HERO_OVERLAY_IMAGES.map((src, index) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-xl shadow-md"
                  style={{ marginTop: index === 1 ? "1.25rem" : "0" }}
                >
                  <Image
                    src={src}
                    alt=""
                    width={160}
                    height={120}
                    className="h-24 w-32 object-cover grayscale sm:h-28 sm:w-36"
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
