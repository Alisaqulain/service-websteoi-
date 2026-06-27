"use client";

import { useState } from "react";
import Image from "next/image";
import { Loader2, CheckCircle2, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BOOKING_SERVICES, BOOKING_IMAGE } from "@/constants/content";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

type FormState = "idle" | "loading" | "success" | "error";

export function BookingSection() {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setFormState("success");
    setTimeout(() => setFormState("idle"), 5000);
  };

  return (
    <section id="book" className="scroll-mt-24 bg-white" aria-label="Book your advisory">
      <div className="bg-primary px-4 py-10 text-white sm:px-6 sm:py-12 md:py-14">
        <div className="container mx-auto lg:px-8">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="size-5 sm:size-6" />
            <h2 className="text-lg font-bold sm:text-xl md:text-2xl">Secure Payment Gateway</h2>
          </div>

          <div className="relative mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-8 sm:mt-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col items-center">
              <span className="rounded-lg bg-black px-4 py-1.5 text-sm font-medium text-white">
                Scan & Pay
              </span>
              <div className="mt-4 flex size-40 items-center justify-center rounded-xl bg-white p-3 sm:mt-5 sm:size-48 sm:p-4 md:size-56">
                <div className="grid size-full grid-cols-8 grid-rows-8 gap-0.5">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className={i % 3 === 0 ? "bg-black" : "bg-white"}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:hidden">
              <span className="flex size-8 items-center justify-center rounded-full bg-black text-xs font-medium text-white">
                Or
              </span>
            </div>

            <div className="hidden items-center justify-center md:flex">
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="h-16 w-px bg-white/60" />
                <span className="my-2 flex size-8 items-center justify-center rounded-full bg-black text-xs font-medium text-white">
                  Or
                </span>
                <div className="h-16 w-px bg-white/60" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="rounded-lg bg-black px-4 py-1.5 text-sm font-medium text-white">
                Click & Pay
              </span>
              <div className="mt-4 w-full max-w-xs rounded-xl bg-white p-5 sm:mt-5 sm:p-6">
                <div className="grid grid-cols-2 gap-3 text-center text-sm font-semibold text-black sm:gap-4">
                  <span className="text-[#00BAF2]">Paytm</span>
                  <span className="text-[#5F259F]">PhonePe</span>
                  <span className="text-[#008C44]">BHIM</span>
                  <span className="text-[#4285F4]">G Pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-14 md:py-20 lg:px-8">
        <ScrollReveal direction="right" className="mx-auto max-w-6xl">
          <h2 className="text-center text-[clamp(1.5rem,5vw,2.25rem)] font-bold text-black">
            Book Your Advisory Now
          </h2>

          <div className="mt-8 grid grid-cols-1 items-start gap-8 sm:mt-10 lg:grid-cols-2 lg:gap-14">
            <ScrollReveal direction="left">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={BOOKING_IMAGE}
                  alt="Book advisory appointment"
                  width={1408}
                  height={768}
                  className="aspect-[4/5] w-full object-cover object-top sm:aspect-[3/4] lg:min-h-[420px] lg:aspect-auto lg:h-full"
                />
              </div>
            </ScrollReveal>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-black">Name *</label>
                  <Input required aria-label="Name" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-black">Gender *</label>
                  <Input required aria-label="Gender" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-black">
                  Designation and place of work *
                </label>
                <Input required aria-label="Designation and place of work" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-black">Department *</label>
                <Input required aria-label="Department" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-black">
                  Permanent address *
                </label>
                <Input required aria-label="Permanent address" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-black">Email *</label>
                  <Input type="email" required aria-label="Email" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-black">
                    Phone Number *
                  </label>
                  <Input type="tel" required aria-label="Phone Number" />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-black">Date & Time</label>
                <Input
                  type="datetime-local"
                  aria-label="Date and Time"
                  className="max-w-full"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-black">
                  Choose Service
                </label>
                <select
                  aria-label="Choose Service"
                  className="flex h-11 w-full rounded-xl border border-border bg-white px-4 py-2 text-sm text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {BOOKING_SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-black">Message</label>
                <textarea
                  aria-label="Message"
                  rows={4}
                  className="flex w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-black placeholder:text-[#555555] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={formState === "loading" || formState === "success"}
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Booking...
                  </>
                ) : formState === "success" ? (
                  <>
                    <CheckCircle2 className="size-4" />
                    Booked!
                  </>
                ) : (
                  "Book Now"
                )}
              </Button>

              {formState === "success" && (
                <p
                  className="flex items-center justify-center gap-1.5 text-sm text-emerald-600"
                  role="status"
                >
                  <CheckCircle2 className="size-4" />
                  Your booking request has been received.
                </p>
              )}
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
