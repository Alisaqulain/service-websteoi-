"use client";

import Image from "next/image";
import { GALLERY_IMAGES } from "@/constants/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-14 md:py-20" aria-label="Inside our trusted support">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14">
          <ScrollReveal direction="left">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-tight text-black">
                Inside Our Trusted Support
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#555555]">
                Explore candid moments and environments reflecting our commitment to
                confidentiality, integrity, and procedural expertise for Karnataka
                government employees.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="columns-2 gap-3 sm:columns-3 sm:gap-4">
              {GALLERY_IMAGES.map((item, index) => (
                <div
                  key={`${item.src}-${index}`}
                  className="mb-3 break-inside-avoid overflow-hidden rounded-2xl sm:mb-4"
                >
                  <Image
                    src={item.src}
                    alt={`Service Security Knowledge gallery photo ${index + 1}`}
                    width={1408}
                    height={768}
                    loading="lazy"
                    className={`w-full object-cover ${
                      item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
