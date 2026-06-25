"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/constants/site";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

interface MobileDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activeSection: string;
}

export function MobileDrawer({ open, onOpenChange, activeSection }: MobileDrawerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <AnimatePresence>
          {open && (
            <>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount>
                <motion.div
                  className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-background/95 p-6 shadow-2xl backdrop-blur-xl"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                >
                  <div className="flex items-center justify-between">
                    <Logo size="sm" />
                    <Dialog.Close asChild>
                      <Button variant="ghost" size="icon" aria-label="Close menu">
                        <X className="size-5" />
                      </Button>
                    </Dialog.Close>
                  </div>

                  <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile navigation">
                    {NAV_LINKS.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={() => onOpenChange(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={cn(
                          "rounded-xl px-4 py-3 text-lg font-medium transition-colors hover:bg-muted hover:text-primary",
                          activeSection === link.href && "bg-primary/10 text-primary"
                        )}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </nav>

                  <div className="mt-auto flex flex-col gap-4 pt-8">
                    <ThemeToggle />
                    <Button size="lg" className="w-full" asChild>
                      <a href="#cta" onClick={() => onOpenChange(false)}>
                        Get Started
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </Dialog.Content>
            </>
          )}
        </AnimatePresence>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

interface HamburgerProps {
  open: boolean;
  onClick: () => void;
}

export function HamburgerMenu({ open, onClick }: HamburgerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex size-10 items-center justify-center rounded-xl transition-colors hover:bg-muted lg:hidden"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <div className="flex w-5 flex-col gap-1.5">
        <motion.span
          className="block h-0.5 w-full rounded-full bg-foreground"
          animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block h-0.5 w-full rounded-full bg-foreground"
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block h-0.5 w-full rounded-full bg-foreground"
          animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </button>
  );
}
