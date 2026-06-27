"use client";

import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/constants/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-3 z-50 flex flex-col gap-2.5 pb-[env(safe-area-inset-bottom)] sm:bottom-8 sm:right-6 sm:gap-3">
      <a
        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
        aria-label="Call us"
        className="flex size-11 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-md transition-transform active:scale-95 sm:size-12 sm:hover:scale-105"
      >
        <Phone className="size-5" />
      </a>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex size-11 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-md transition-transform active:scale-95 sm:size-12 sm:hover:scale-105"
      >
        <MessageCircle className="size-5" />
      </a>
    </div>
  );
}
