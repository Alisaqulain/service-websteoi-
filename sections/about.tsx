"use client";

import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { VISION_MISSION_VALUES, ABOUT_IMAGE } from "@/constants/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function AboutSection() {
  const valueItem = VISION_MISSION_VALUES.find((item) => item.title === "Value");
  const visionMission = VISION_MISSION_VALUES.filter((item) => item.title !== "Value");

  return (
    <section id="about" className="bg-white py-14 md:py-20" aria-label="About us">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="right" className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Expert Advisory Support
          </p>
          <p className="mt-5 text-[clamp(1rem,2vw,1.125rem)] leading-relaxed text-[#555555]">
            Service Security Knowledge offers expert procedural and advisory support
            to Karnataka government officials, police personnel, PSU employees, and
            retirees. Led by a retired police officer, we prioritize confidentiality
            and integrity in handling departmental enquiries, tax filing, and service
            matters.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 lg:grid-cols-3 lg:gap-10">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              {visionMission.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CircleCheckBig className="mt-0.5 size-6 shrink-0 text-black" />
                  <div>
                    <h3 className="text-lg font-bold text-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#555555]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.1}>
            <div className="overflow-hidden rounded-3xl">
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
            <ScrollReveal direction="right">
              <div className="flex gap-3 lg:justify-end">
                <CircleCheckBig className="mt-0.5 size-6 shrink-0 text-black" />
                <div className="max-w-xs">
                  <h3 className="text-lg font-bold text-black">{valueItem.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#555555]">
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
