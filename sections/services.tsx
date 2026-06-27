"use client";

import Image from "next/image";
import { SERVICE_CATEGORIES } from "@/constants/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-12 sm:py-14 md:py-20" aria-label="Our services">
      <div className="container mx-auto space-y-12 px-4 sm:space-y-16 sm:px-6 lg:px-8">
        {SERVICE_CATEGORIES.map((category, categoryIndex) => (
          <div key={category.slug} id={`service-${category.slug}`} className="scroll-mt-24">
            <ScrollReveal direction={categoryIndex % 2 === 0 ? "left" : "right"}>
              <div className="mx-auto max-w-6xl">
                <h2 className="text-[clamp(1.5rem,5vw,2.75rem)] font-bold text-black">
                  {category.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#555555] sm:mt-3 sm:text-base">
                  {category.description}
                </p>
              </div>
            </ScrollReveal>

            <div
              className={`mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 sm:mt-10 sm:gap-6 ${
                category.items.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {category.items.map((item, itemIndex) => (
                <ScrollReveal
                  key={item.title}
                  direction={itemIndex % 2 === 0 ? "left" : "right"}
                  delay={itemIndex * 0.05}
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#f8f9fa] sm:rounded-3xl">
                    <div className="flex flex-1 flex-col p-5 pb-3 sm:p-6 sm:pb-4 md:p-8 md:pb-5">
                      <h3 className="text-lg font-bold text-black sm:text-xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#555555] sm:mt-3">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-auto overflow-hidden px-3 pb-3 sm:px-4 sm:pb-4 md:px-5 md:pb-5">
                      <div className="overflow-hidden rounded-xl sm:rounded-2xl">
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
