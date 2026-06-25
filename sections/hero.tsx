"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { HERO_FLOATING_CARDS } from "@/constants/content";
import { FloatingParticles } from "@/components/shared/floating-particles";
import { ScrollIndicator } from "@/components/shared/scroll-indicator";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/animations/variants";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-[72px]"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-20 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-20 size-[400px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute left-1/2 top-1/3 size-[300px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[80px]" />
      </div>

      <FloatingParticles />

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-none"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Enterprise Security Platform
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.1] tracking-tight text-foreground"
          >
            Secure Your Digital Future with{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Intelligent Protection
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-muted-foreground"
          >
            Unify threat intelligence, compliance automation, and security knowledge
            in one powerful platform. Protect what matters most with confidence.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton size="xl" asChild>
              <a href="#cta">
                Start Free Trial
                <ArrowRight className="size-5" />
              </a>
            </MagneticButton>
            <Button variant="secondary" size="xl" asChild>
              <a href="#features" className="group">
                <Play className="size-4 transition-transform group-hover:scale-110" />
                Watch Demo
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {["AC", "MR", "EK", "JO"].map((initials) => (
                <div
                  key={initials}
                  className="flex size-9 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-accent/80 text-xs font-semibold text-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <p>
              Trusted by <span className="font-semibold text-foreground">2,500+</span> security teams worldwide
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y, opacity }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative aspect-square max-h-[560px] w-full">
            <div className="absolute inset-4 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex h-full items-center justify-center p-8"
            >
              <Image
                src="/illustrations/hero-dashboard.svg"
                alt="AegisCore security dashboard showing threat monitoring and analytics"
                width={560}
                height={560}
                priority
                className="relative z-10 w-full drop-shadow-2xl"
              />
            </motion.div>

            {HERO_FLOATING_CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.15 }}
                  className="absolute z-20"
                  style={{
                    top: index === 0 ? "8%" : index === 1 ? "55%" : "25%",
                    left: index === 0 ? "-5%" : index === 1 ? "5%" : "auto",
                    right: index === 2 ? "-5%" : "auto",
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md dark:bg-white/5"
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{card.label}</p>
                      <p className="text-sm font-semibold text-foreground">{card.value}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
