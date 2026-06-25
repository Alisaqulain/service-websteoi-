"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { BENEFITS } from "@/constants/content";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/animations/variants";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
      aria-label="Benefits"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" aria-hidden="true" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl">
              <Image
                src="/illustrations/benefits-team.svg"
                alt="Security team collaborating with AegisCore platform"
                width={600}
                height={500}
                loading="lazy"
                className="w-full"
              />
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Why AegisCore"
              title="Built for Teams Who Take Security Seriously"
              description="Join thousands of organizations that have transformed their security operations with our platform."
              align="left"
              className="mb-8"
            />

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-4"
            >
              {BENEFITS.map((benefit) => (
                <motion.li
                  key={benefit}
                  variants={slideInRight}
                  className="group flex items-start gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  </motion.div>
                  <span className="text-[clamp(0.9375rem,2vw,1.0625rem)] leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 flex items-center gap-6 rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">68%</p>
                <p className="text-xs text-muted-foreground">Fewer Incidents</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">3x</p>
                <p className="text-xs text-muted-foreground">Faster Compliance</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-xs text-muted-foreground">Tools Consolidated</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
