import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { ServicesSection } from "@/sections/services";
import { BenefitsSection } from "@/sections/benefits";
import { FAQSection } from "@/sections/faq";
import { GallerySection } from "@/sections/gallery";
import { BookingSection } from "@/sections/booking";
import { ContactSection } from "@/sections/contact";
import { FAQ_ITEMS } from "@/constants/content";
import { getFAQSchema } from "@/lib/metadata";

export default function HomePage() {
  const faqSchema = getFAQSchema(FAQ_ITEMS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <FAQSection />
      <GallerySection />
      <BookingSection />
      <ContactSection />
    </>
  );
}
