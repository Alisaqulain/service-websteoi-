"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { SITE, FOOTER_LINKS, SOCIAL_LINKS } from "@/constants/site";
import { Logo } from "@/components/shared/logo";
import { SocialIcon } from "@/components/shared/social-icon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

export function Footer() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setFormState("error");
      return;
    }

    setFormState("loading");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormState("success");
    setEmail("");
    setTimeout(() => setFormState("idle"), 4000);
  };

  return (
    <footer className="relative border-t border-border/60 bg-muted/30">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo size="lg" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE.description}
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0" />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0" />
                {SITE.phone}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                {SITE.address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-5">
            {(
              [
                ["Product", FOOTER_LINKS.product],
                ["Company", FOOTER_LINKS.company],
                ["Resources", FOOTER_LINKS.resources],
                ["Legal", FOOTER_LINKS.legal],
              ] as const
            ).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Get security insights and product updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3" noValidate>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (formState === "error") setFormState("idle");
                }}
                error={formState === "error"}
                disabled={formState === "loading" || formState === "success"}
                aria-label="Email address for newsletter"
                aria-invalid={formState === "error"}
                aria-describedby={error ? "newsletter-error" : undefined}
              />
              {error && formState === "error" && (
                <p id="newsletter-error" className="text-xs text-destructive" role="alert">
                  {error}
                </p>
              )}
              {formState === "success" && (
                <p className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400" role="status">
                  <CheckCircle2 className="size-3.5" />
                  Successfully subscribed!
                </p>
              )}
              <Button
                type="submit"
                className="w-full"
                disabled={formState === "loading" || formState === "success"}
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Subscribing...
                  </>
                ) : formState === "success" ? (
                  "Subscribed!"
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "flex size-10 items-center justify-center rounded-xl border border-border/60 bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  )}
                >
                  <SocialIcon name={social.icon} />
                </motion.a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
