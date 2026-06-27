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
      className="scroll-mt-24 bg-white py-12 sm:py-14 md:py-20"
      aria-label="Frequently asked questions"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="right" className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.5rem,5vw,2.5rem)] font-bold text-black">
            Service Security FAQs
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#555555] sm:mt-4 sm:text-base">
            Find answers to common questions about our expert support services for
            Karnataka government and PSU employees.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="mx-auto mt-8 max-w-3xl sm:mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
