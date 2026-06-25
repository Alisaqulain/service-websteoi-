import { HeroSection } from "@/sections/hero";
import { TrustSection } from "@/sections/trust";
import { FeaturesSection } from "@/sections/features";
import { ServicesSection } from "@/sections/services";
import { BenefitsSection } from "@/sections/benefits";
import { ProcessSection } from "@/sections/process";
import { StatsSection } from "@/sections/stats";
import { TestimonialsSection } from "@/sections/testimonials";
import { FAQSection } from "@/sections/faq";
import { CTASection } from "@/sections/cta";
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
      <TrustSection />
      <FeaturesSection />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
