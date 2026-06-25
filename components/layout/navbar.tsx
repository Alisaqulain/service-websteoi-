"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/constants/site";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileDrawer, HamburgerMenu } from "@/components/layout/mobile-drawer";
import { useScrolled, useActiveSection } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(20);
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.href));

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border/60 bg-background/80 shadow-lg shadow-black/5 backdrop-blur-xl dark:shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  activeSection === link.href && "text-primary"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-primary transition-all duration-300",
                    activeSection === link.href
                      ? "w-6"
                      : "w-0 group-hover:w-4"
                  )}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button className="hidden sm:inline-flex" asChild>
              <a href="#cta">Get Started</a>
            </Button>
            <HamburgerMenu open={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} />
          </div>
        </div>
      </motion.header>

      <MobileDrawer
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        activeSection={activeSection}
      />
    </>
  );
}
