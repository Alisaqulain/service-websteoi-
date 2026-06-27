"use client";

import Image from "next/image";
import { Mail, MapPin, Phone, CalendarDays } from "lucide-react";
import { SITE } from "@/constants/site";
import { CONTACT_BG_IMAGE } from "@/constants/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const contactItems = [
  {
    icon: Phone,
    title: "Phone",
    content: (
      <a
        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
        className="mt-2 block break-all text-sm text-[#555555] hover:text-primary"
      >
        {SITE.phone}
      </a>
    ),
  },
  {
    icon: MapPin,
    title: "Address",
    content: (
      <p className="mt-2 text-sm leading-relaxed text-[#555555]">{SITE.address}</p>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    content: (
      <a
        href={`mailto:${SITE.email}`}
        className="mt-2 block break-all text-sm text-[#555555] hover:text-primary"
      >
        {SITE.email}
      </a>
    ),
  },
  {
    icon: CalendarDays,
    title: "Office Timing",
    content: (
      <p className="mt-2 text-sm leading-relaxed text-[#555555]">{SITE.officeHours}</p>
    ),
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-[480px] overflow-hidden sm:min-h-[520px]"
      aria-label="Contact us"
    >
      <Image
        src={CONTACT_BG_IMAGE}
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <ScrollReveal direction="left" className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.5rem,5vw,2.75rem)] font-bold text-white">
            Get in Touch with Service Security
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/85 sm:mt-4 sm:text-base">
            Reach out via call, email, or visit our Bangalore office for advisory
            support and procedural guidance tailored for Karnataka government and
            PSU employees.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={item.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.05}
              >
                <div className="h-full rounded-2xl bg-white p-5 shadow-lg sm:p-6">
                  <div className="flex size-10 items-center justify-center rounded-full border-2 border-primary">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mt-3 font-semibold text-black sm:mt-4">{item.title}</h3>
                  {item.content}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
