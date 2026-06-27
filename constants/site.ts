export const SITE = {
  name: "Service Security Knowledge",
  tagline: "Expert Government Service Advisory in Bangalore",
  description:
    "Service Security Knowledge offers expert procedural and advisory support to Karnataka government officials, police personnel, PSU employees, and retirees.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://servicesecurityknowledge.com",
  email: "servicesecurityknowledge@gmail.com",
  phone: "+918277493659",
  whatsapp: "918277493659",
  address:
    "B416 Willson Vintage, Behind Adugodi Post Office, Wilsongarden, BENGALURU - 560030",
  officeHours: "Monday–Friday: 9:00 AM – 6:00 PM, Saturday & Sunday: Closed",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Book Now", href: "#book" },
] as const;

export const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Book Now", href: "#book" },
] as const;
