"use client";

import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-100 w-full flex items-center overflow-hidden">
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
        <div className="max-w-3xl animate-in fade-in slide-in-from-left-12 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-white/60 border border-white/40 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="size-3 fill-primary" /> The Future of Services
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 dark:text-primary text-primary-foreground leading-[1.1]">
            Connecting Talent <br />
            <span>With Opportunity.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            MNA ServiceHub is Bangladesh&apos;s premier digital marketplace
            designed to bridge the gap between world-class service providers and
            everyday customers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services">
              <Button size="lg" className="font-bold px-8 rounded-full group">
                Explore Services
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/careers">
              <Button
                variant="outline"
                size="lg"
                className="dark:text-white text-black border-white/20 hover:bg-white/10 rounded-full px-8"
              >
                Join as Provider
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
