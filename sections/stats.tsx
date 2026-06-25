"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { CountUp } from "@/components/shared/count-up";
import { STATS } from "@/constants/content";
import { fadeInUp, staggerContainer } from "@/animations/variants";

export function StatsSection() {
  return (
    <section
      id="stats"
      className="relative py-20 md:py-28"
      aria-label="Platform statistics"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-accent/[0.03]" aria-hidden="true" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="By the Numbers"
          title="Impact That Speaks for Itself"
          description="Real metrics from organizations that trust AegisCore to protect their digital assets."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card to-card/50 p-6 text-center backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10 md:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <div className="relative">
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <Icon className="size-7 text-primary" />
                  </div>
                  <p className="text-[clamp(2rem,4vw,3rem)] font-bold text-foreground">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
