"use client";

import React from "react";
import Image from "next/image";
import {
  Users,
  ShieldCheck,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Globe,
  Zap,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AboutUsExtended from "./AboutUsExtended";

const AboutUsComp = () => {
  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      {/* 1. Dynamic Hero Banner Section */}
      <section className="relative min-h-100 w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
            alt="MNA ServiceHub Connectivity"
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
              designed to bridge the gap between world-class service providers
              and everyday customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-bold px-8 rounded-full group">
                Explore Services
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="dark:text-white text-black border-white/20 hover:bg-white/10 rounded-full px-8"
              >
                Join as Provider
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition (Better UX: Icon Grids) */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Strict Verification",
                desc: "Every provider on MNA ServiceHub undergoes a multi-step identity and skill check to ensure 100% reliability.",
                icon: ShieldCheck,
                color: "text-blue-500",
              },
              {
                title: "Community Driven",
                desc: "A platform built for the people, by the people. We foster growth for local experts and job candidates.",
                icon: Users,
                color: "text-primary",
              },
              {
                title: "Global Standards",
                desc: "We bring international service marketplace standards to the local market with seamless UI/UX.",
                icon: Globe,
                color: "text-purple-500",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl transition-all duration-500 hover:bg-muted/50 border  hover:border-sky-500 animate-in fade-in slide-in-from-bottom-6"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div
                  className={`size-14 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${feature.color}`}
                >
                  <feature.icon className="size-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Information Section (UX: Text & Visual Balance) */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative group animate-in fade-in slide-in-from-left-12 duration-1000">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-border shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880212340-02d956ea3b85?auto=format&fit=crop&q=80"
                  alt="MNA ServiceHub Workflow"
                  width={600}
                  height={500}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Trust Badge */}
              <div className="absolute -bottom-8 -right-8 bg-card border border-border p-6 rounded-2xl shadow-xl hidden md:block animate-bounce duration-5000">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-full">
                    <Star className="size-6 text-green-500 fill-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">4.9/5 Average Rating</p>
                    <p className="text-xs text-muted-foreground">
                      From 10,000+ Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-right-12 duration-1000">
              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold tracking-tight">
                  One Platform, <br />
                  <span className="text-primary italic">
                    Endless Possibilities.
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MNA ServiceHub is designed to be the ultimate ecosystem.
                  Whether you are a **Customer** looking for home repairs, a
                  **Service Provider** wanting to expand your business, or a
                  **Job Candidate** seeking career growth—we provide the tools
                  to make it happen.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                {[
                  "Real-time tracking of service progress",
                  "Secure payment gateway with escrow protection",
                  "Advanced rating and review system for transparency",
                  "Dedicated support for Admin and Manager oversight",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group"
                  >
                    <CheckCircle2 className="size-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Goal (UX: Call to Action) */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-linear-to-br from-primary/10 to-accent/5 border border-primary/20 p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-5 transition-transform group-hover:rotate-12 duration-1000">
            <Rocket className="size-64 text-primary" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">
            Ready to experience the <br />{" "}
            <span className="text-primary">ServiceHub</span> Revolution?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 relative z-10">
            Join thousands of satisfied users today. Our system connects people
            with precision, making digital services accessible to everyone in
            Bangladesh.
          </p>
          <div className="flex justify-center relative z-10">
            <Link href="/register">
              <Button
                size="lg"
                className="rounded-full px-12 font-black shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1"
              >
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <AboutUsExtended />
    </div>
  );
};

export default AboutUsComp;
