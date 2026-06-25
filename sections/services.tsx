"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SERVICES } from "@/constants/content";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-muted/30 py-20 md:py-28 lg:py-32"
      aria-label="Our services"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Security Solutions"
          description="From threat detection to team training, we provide end-to-end security services tailored to your needs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.a
              key={service.title}
              href="#cta"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  service.gradient
                )}
              />
              <div className="relative flex flex-col sm:flex-row">
                <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-auto sm:w-2/5">
                  <Image
                    src={service.image}
                    alt={`${service.title} illustration`}
                    width={400}
                    height={250}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
