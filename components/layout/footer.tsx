import { Mail, Phone } from "lucide-react";
import { SITE, FOOTER_LINKS } from "@/constants/site";
import { Logo } from "@/components/shared/logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white pb-6 pt-10 sm:pb-8 sm:pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <Logo size="lg" />

          <nav
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-6"
            aria-label="Footer navigation"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-black transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-black">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              aria-label="Phone"
              className="transition-colors hover:text-primary"
            >
              <Phone className="size-5" />
            </a>
            <span className="text-[#555555]">|</span>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="transition-colors hover:text-primary"
            >
              <Mail className="size-5" />
            </a>
          </div>

          <p className="px-2 text-center text-xs text-[#555555] sm:text-sm">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
