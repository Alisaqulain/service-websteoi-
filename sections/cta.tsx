"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Input } from "@/components/ui/input";
import { fadeInUp, staggerContainer } from "@/animations/variants";

type FormState = "idle" | "loading" | "success" | "error";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid work email.");
      setFormState("error");
      return;
    }

    setFormState("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
    setEmail("");
    setTimeout(() => setFormState("idle"), 5000);
  };

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
      aria-label="Call to action"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/4 size-64 rounded-full bg-primary/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 size-48 rounded-full bg-accent/20 blur-[80px]"
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-card/60 p-8 text-center backdrop-blur-xl md:p-12 lg:p-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-tight text-foreground"
          >
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Security Posture?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-xl text-[clamp(1rem,2vw,1.125rem)] leading-relaxed text-muted-foreground"
          >
            Start your 14-day free trial today. No credit card required.
            Join 2,500+ enterprises already protected by AegisCore.
          </motion.p>

          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            noValidate
          >
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (formState === "error") setFormState("idle");
              }}
              error={formState === "error"}
              disabled={formState === "loading" || formState === "success"}
              className="flex-1"
              aria-label="Work email for free trial"
              aria-invalid={formState === "error"}
              aria-describedby={error ? "cta-error" : undefined}
            />
            <MagneticButton
              type="submit"
              size="lg"
              disabled={formState === "loading" || formState === "success"}
              className="shrink-0"
            >
              {formState === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Starting...
                </>
              ) : formState === "success" ? (
                <>
                  <CheckCircle2 className="size-4" />
                  Started!
                </>
              ) : (
                <>
                  Get Started
                  <ArrowRight className="size-4" />
                </>
              )}
            </MagneticButton>
          </motion.form>

          {error && formState === "error" && (
            <p id="cta-error" className="mt-2 text-sm text-destructive" role="alert">
              {error}
            </p>
          )}

          {formState === "success" && (
            <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400" role="status">
              <CheckCircle2 className="size-4" />
              Check your inbox for next steps!
            </p>
          )}

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-xs text-muted-foreground"
          >
            Free 14-day trial &bull; No credit card &bull; Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
