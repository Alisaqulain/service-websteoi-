export const SITE = {
  name: "AegisCore",
  tagline: "Enterprise Security Intelligence",
  description:
    "AegisCore delivers unified security knowledge, threat intelligence, and compliance guidance for modern enterprises.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aegiscore.com",
  email: "hello@aegiscore.com",
  phone: "+1 (800) 555-0198",
  address: "1200 Innovation Drive, Suite 400, Austin, TX 78701",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" as const },
  { label: "GitHub", href: "https://github.com", icon: "github" as const },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" as const },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Platform Overview", href: "#features" },
    { label: "Threat Intelligence", href: "#services" },
    { label: "Compliance Hub", href: "#services" },
    { label: "Integrations", href: "#features" },
  ],
  company: [
    { label: "About Us", href: "#benefits" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#cta" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Security Blog", href: "#" },
    { label: "Case Studies", href: "#testimonials" },
    { label: "Support Center", href: "#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security", href: "#" },
  ],
} as const;
