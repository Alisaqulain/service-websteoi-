"use client";

import Image from "next/image";
import { SERVICE_CATEGORIES } from "@/constants/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-14 md:py-20" aria-label="Our services">
      <div className="container mx-auto space-y-16 px-4 sm:px-6 lg:px-8">
        {SERVICE_CATEGORIES.map((category, categoryIndex) => (
          <div key={category.slug} id={`service-${category.slug}`}>
            <ScrollReveal direction={categoryIndex % 2 === 0 ? "left" : "right"}>
              <div className="mx-auto max-w-6xl">
                <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-black">
                  {category.title}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#555555]">
                  {category.description}
                </p>
              </div>
            </ScrollReveal>

            <div
              className={`mx-auto mt-10 grid max-w-6xl gap-6 ${
                category.items.length === 2
                  ? "sm:grid-cols-2"
                  : "sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {category.items.map((item, itemIndex) => (
                <ScrollReveal
                  key={item.title}
                  direction={itemIndex % 2 === 0 ? "left" : "right"}
                  delay={itemIndex * 0.08}
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-[#f8f9fa]">
                    <div className="flex flex-1 flex-col p-6 pb-4 md:p-8 md:pb-5">
                      <h3 className="text-xl font-bold text-black">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#555555]">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-auto overflow-hidden px-4 pb-4 md:px-5 md:pb-5">
                      <div className="overflow-hidden rounded-2xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={1408}
                          height={768}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
