"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants/site";
import { Logo } from "@/components/shared/logo";
import { ServicesDropdown } from "@/components/layout/services-dropdown";
import { MobileDrawer, HamburgerMenu } from "@/components/layout/mobile-drawer";
import { useActiveSection } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(NAV_LINKS.map((l) => l.href));

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/40 bg-white">
        <div className="container mx-auto flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo size="sm" />

          <nav
            className="hidden items-center rounded-full bg-primary px-2 py-2 lg:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <ServicesDropdown key={link.href} activeSection={activeSection} />
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15",
                    activeSection === link.href && "bg-white/20"
                  )}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <HamburgerMenu open={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} />
        </div>
      </header>

      <MobileDrawer
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        activeSection={activeSection}
      />
    </>
  );
}
