"use client";

import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/constants/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 sm:bottom-8 sm:right-6">
      <a
        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
        aria-label="Call us"
        className="flex size-11 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-md transition-transform hover:scale-105 sm:size-12"
      >
        <Phone className="size-5" />
      </a>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex size-11 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-md transition-transform hover:scale-105 sm:size-12"
      >
        <MessageCircle className="size-5" />
      </a>
    </div>
  );
}
