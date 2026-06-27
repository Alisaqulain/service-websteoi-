"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/constants/site";
import { SERVICE_CATEGORIES } from "@/constants/content";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activeSection: string;
}

export function MobileDrawer({ open, onOpenChange, activeSection }: MobileDrawerProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <AnimatePresence>
          {open && (
            <>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-50 bg-black/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount>
                <motion.div
                  className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-xl"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <Logo size="md" />
                    <Dialog.Close asChild>
                      <Button variant="ghost" size="icon" aria-label="Close menu">
                        <X className="size-5" />
                      </Button>
                    </Dialog.Close>
                  </div>

                  <nav className="mt-10 flex flex-col gap-2" aria-label="Mobile navigation">
                    {NAV_LINKS.map((link, index) =>
                      link.label === "Services" ? (
                        <div key={link.href}>
                          <button
                            type="button"
                            onClick={() => setServicesOpen((prev) => !prev)}
                            className={cn(
                              "flex w-full items-center justify-between rounded-full px-5 py-3 text-base font-medium text-white transition-colors",
                              activeSection === link.href ||
                                activeSection.startsWith("#service-")
                                ? "bg-primary"
                                : "bg-primary/90 hover:bg-primary"
                            )}
                          >
                            Services
                            <ChevronDown
                              className={cn(
                                "size-4 transition-transform",
                                servicesOpen && "rotate-180"
                              )}
                            />
                          </button>
                          {servicesOpen && (
                            <div className="mt-2 overflow-hidden rounded-xl border border-border bg-[#f5f5f5]">
                              {SERVICE_CATEGORIES.map((category) => (
                                <a
                                  key={category.slug}
                                  href={`#service-${category.slug}`}
                                  onClick={() => onOpenChange(false)}
                                  className="block px-5 py-3 text-sm text-black hover:bg-white hover:text-primary"
                                >
                                  {category.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          onClick={() => onOpenChange(false)}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={cn(
                            "rounded-full px-5 py-3 text-center text-base font-medium text-white transition-colors",
                            activeSection === link.href
                              ? "bg-primary"
                              : "bg-primary/90 hover:bg-primary"
                          )}
                        >
                          {link.label}
                        </motion.a>
                      )
                    )}
                  </nav>
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
      className="relative flex size-10 items-center justify-center rounded-lg transition-colors hover:bg-muted lg:hidden"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      <div className="flex w-5 flex-col gap-1.5">
        <motion.span
          className="block h-0.5 w-full rounded-full bg-black"
          animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block h-0.5 w-full rounded-full bg-black"
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block h-0.5 w-full rounded-full bg-black"
          animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </button>
  );
}
