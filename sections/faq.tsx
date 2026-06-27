"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/constants/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function FAQSection() {
  return (
    <section
      id="faq"
      className="bg-white py-16 md:py-20 lg:py-24"
      aria-label="Frequently asked questions"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="right" className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-black">
            Service Security FAQs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#555555]">
            Find answers to common questions about our expert support services for
            Karnataka government and PSU employees.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
