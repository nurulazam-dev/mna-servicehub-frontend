"use client";

import Image from "next/image";

export default function AboutUsHeader() {
  return (
    <section className="relative min-h-30 w-full flex items-center overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
          alt="MNA ServiceHub"
          fill
          className="object-cover transition-transform duration-10000 hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto p-6">
        <div className="max-w-3xl animate-in fade-in slide-in-from-center-12 duration-1000">
          <h1 className="text-5xl md:text-7xl font-black mb-6 dark:text-primary text-primary-foreground leading-[1.1]">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            MNA ServiceHub is Bangladesh&apos;s premier digital marketplace
            designed to bridge the gap between world-class service providers and
            everyday customers.
          </p>
        </div>
      </div>
    </section>
  );
}
