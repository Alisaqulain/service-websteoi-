"use client";

import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { VISION_MISSION_VALUES, ABOUT_IMAGE } from "@/constants/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function AboutSection() {
  const valueItem = VISION_MISSION_VALUES.find((item) => item.title === "Value");
  const visionMission = VISION_MISSION_VALUES.filter((item) => item.title !== "Value");

  return (
    <section id="about" className="scroll-mt-24 bg-white py-12 sm:py-14 md:py-20" aria-label="About us">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="right" className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Expert Advisory Support
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#555555] sm:mt-5 sm:text-[clamp(1rem,2vw,1.125rem)]">
            Service Security Knowledge offers expert procedural and advisory support
            to Karnataka government officials, police personnel, PSU employees, and
            retirees. Led by a retired police officer, we prioritize confidentiality
            and integrity in handling departmental enquiries, tax filing, and service
            matters.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 sm:mt-12 lg:grid-cols-3 lg:items-center lg:gap-10">
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="space-y-6 sm:space-y-8">
              {visionMission.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CircleCheckBig className="mt-0.5 size-5 shrink-0 text-black sm:size-6" />
                  <div>
                    <h3 className="text-base font-bold text-black sm:text-lg">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#555555] sm:mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1} className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src={ABOUT_IMAGE}
                alt="Karnataka government officials receiving advisory support"
                width={1408}
                height={768}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>

          {valueItem && (
            <ScrollReveal direction="right" className="order-3">
              <div className="flex gap-3 lg:justify-end">
                <CircleCheckBig className="mt-0.5 size-5 shrink-0 text-black sm:size-6" />
                <div className="max-w-none lg:max-w-xs">
                  <h3 className="text-base font-bold text-black sm:text-lg">{valueItem.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#555555] sm:mt-2">
                    {valueItem.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
