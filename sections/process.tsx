"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { GsapReveal } from "@/components/shared/gsap-reveal";
import { PROCESS_STEPS } from "@/constants/content";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative bg-muted/30 py-20 md:py-28 lg:py-32"
      aria-label="Our process"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="A Proven Path to Security Excellence"
          description="Our structured approach ensures seamless implementation and measurable results from day one."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          <div
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2 md:block md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-8 md:space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className={cn(
                  "relative grid items-center gap-6 md:grid-cols-2 md:gap-12",
                  index % 2 === 1 && "md:[direction:rtl]"
                )}
              >
                <div className={cn("md:[direction:ltr]", index % 2 === 1 && "md:text-right")}>
                  <div
                    className={cn(
                      "hidden md:block",
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    )}
                  />
                </div>

                <GsapReveal delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "group relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5 md:p-8 md:[direction:ltr]",
                    index % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
                  )}
                >
                  <div className="absolute -left-3 top-8 hidden size-6 items-center justify-center rounded-full border-2 border-primary bg-background md:flex md:-left-[calc(50%+12px)] md:top-1/2 md:-translate-y-1/2">
                    <div className="size-2 rounded-full bg-primary" />
                  </div>

                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
                </GsapReveal>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
