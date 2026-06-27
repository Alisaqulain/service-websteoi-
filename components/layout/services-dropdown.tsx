"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/constants/content";
import { cn } from "@/lib/utils";

interface ServicesDropdownProps {
  activeSection: string;
}

export function ServicesDropdown({ activeSection }: ServicesDropdownProps) {
  const [open, setOpen] = useState(false);
  const isActive = activeSection === "#services" || activeSection.startsWith("#service-");

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex items-center gap-1 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/15",
          isActive && "bg-white/20"
        )}
      >
        Services
        <ChevronDown
          className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 min-w-[240px] -translate-x-1/2 pt-2 transition-all duration-200",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        <div className="overflow-hidden rounded-xl border border-border bg-[#f5f5f5] py-2 shadow-lg">
          {SERVICE_CATEGORIES.map((category) => (
            <a
              key={category.slug}
              href={`#service-${category.slug}`}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm text-black transition-colors hover:bg-white hover:text-primary"
            >
              {category.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
