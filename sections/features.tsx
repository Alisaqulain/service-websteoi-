"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { FEATURES } from "@/constants/content";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import { cn } from "@/lib/utils";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-20 md:py-28 lg:py-32"
      aria-label="Platform features"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" aria-hidden="true" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform Features"
          title="Everything You Need to Stay Protected"
          description="A comprehensive suite of security tools designed for modern enterprises that demand excellence."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-primary/5 md:p-8">
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <motion.p
                        className="text-2xl font-bold text-primary"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {feature.stat}
                      </motion.p>
                      <p className="text-xs text-muted-foreground">{feature.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <div
                    className={cn(
                      "mt-5 h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full"
                    )}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
