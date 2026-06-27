"use client";

import { WHY_CHOOSE } from "@/constants/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function BenefitsSection() {
  return (
    <section
      id="why-choose"
      className="scroll-mt-24 bg-white py-12 sm:py-14 md:py-20"
      aria-label="Why choose us"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="left" className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-black">
            Why Choose Service Security Knowledge
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#555555] sm:mt-4 sm:text-base">
            Confidential, expert support by a retired officer tailored for Karnataka
            officials and PSU staff.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {WHY_CHOOSE.map((item, index) => (
            <ScrollReveal
              key={item.number}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.05}
            >
              <div className="flex h-full gap-3 rounded-xl border border-border bg-white p-5 sm:gap-4 sm:p-6">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white sm:size-10">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-black sm:text-lg">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#555555] sm:mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
