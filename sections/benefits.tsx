"use client";

import { WHY_CHOOSE } from "@/constants/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function BenefitsSection() {
  return (
    <section
      id="why-choose"
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-label="Why choose us"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="left" className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-black">
            Why Choose Service Security Knowledge
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#555555]">
            Confidential, expert support by a retired officer tailored for Karnataka
            officials and PSU staff.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {WHY_CHOOSE.map((item, index) => (
            <ScrollReveal
              key={item.number}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.08}
            >
              <div className="flex gap-4 rounded-xl border border-border bg-white p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#555555]">
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
