"use client";

import React, { useEffect, useState } from "react";
import {
  Target,
  Eye,
  History,
  Award,
  TrendingUp,
  Users2,
  Globe2,
  Heart,
  ArrowUpRight,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutUsExtended = () => {
  // Countdown State Logic
  const [counts, setCounts] = useState({
    users: 0,
    providers: 0,
    projects: 0,
    rating: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        users: prev.users < 50 ? prev.users + 1 : 50,
        providers: prev.providers < 1200 ? prev.providers + 20 : 1200,
        projects: prev.projects < 85 ? prev.projects + 1 : 85,
        rating: 4.9,
      }));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-0">
      {/* 1. Company Deep-Dive (About Our Company) */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Beyond Just a Marketplace: <br />
                <span className="text-primary text-2xl md:text-4xl italic font-medium">
                  The MNA ServiceHub Story
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded in 2025, MNA ServiceHub emerged to solve the
                fragmentation in Bangladesh&apos;s service industry. We realized
                that finding a verified plumber, a professional developer, or a
                reliable caregiver shouldn&apos;t be a matter of luck—it should
                be a matter of a few clicks.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-2xl">
                  <History className="text-primary size-6" />
                  <span className="font-semibold">Established 2025</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-2xl">
                  <TrendingUp className="text-primary size-6" />
                  <span className="font-semibold">100% Growth YoY</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-10 duration-700">
              <div className="space-y-4 pt-12">
                <div className="h-64 bg-primary/10 rounded-3xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-8">
                    <Award className="size-12 text-primary opacity-20" />
                  </div>
                </div>
                <div className="h-48 bg-muted rounded-3xl" />
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-muted rounded-3xl" />
                <div className="h-64 bg-accent/20 rounded-3xl relative overflow-hidden group">
                  <div className="p-8">
                    <Globe2 className="size-12 text-primary opacity-20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Countdown Section (The Impact) */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              {
                label: "Happy Customers",
                value: `${counts.users}k+`,
                icon: Users2,
              },
              {
                label: "Verified Providers",
                value: `${counts.providers}+`,
                icon: ShieldCheck,
              },
              {
                label: "Successful Jobs",
                value: `${counts.projects}k+`,
                icon: ArrowUpRight,
              },
              { label: "User Rating", value: counts.rating, icon: Star },
            ].map((stat, i) => (
              <div
                key={i}
                className="space-y-4 transition-transform hover:scale-110 duration-300"
              >
                <div className="mx-auto size-12 bg-white/20 rounded-full flex items-center justify-center">
                  <stat.icon className="size-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-bold uppercase opacity-80 tracking-widest">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Section (Interactive Cards) */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission */}
            <Card className="p-10 border-none bg-background shadow-2xl shadow-primary/5 rounded-[3rem] group hover:bg-primary transition-all duration-500">
              <div className="space-y-6">
                <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Target className="size-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-bold group-hover:text-white transition-colors">
                  Our Mission
                </h3>
                <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                  To democratize access to professional services by creating a
                  transparent, secure, and efficient ecosystem where talent
                  meets demand instantly. We aim to empower every skilled
                  individual in Bangladesh to become their own boss.
                </p>
                <ul className="space-y-3 pt-4">
                  {[
                    "Integrity in every deal",
                    "Unmatched security",
                    "User-first approach",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 group-hover:text-white/90"
                    >
                      <CheckCircle2 className="size-4 text-primary group-hover:text-white" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Our Vision */}
            <Card className="p-10 border-none bg-background shadow-2xl shadow-primary/5 rounded-[3rem] group hover:bg-black transition-all duration-500">
              <div className="space-y-6">
                <div className="size-16 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Eye className="size-8 text-accent-foreground group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-bold group-hover:text-white transition-colors">
                  Our Vision
                </h3>
                <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                  To be the undisputed leader of the digital service economy in
                  South Asia. We envision a future where MNA ServiceHub is a
                  household name, synonymous with quality, trust, and
                  professional growth for millions.
                </p>
                <div className="pt-6">
                  <div className="p-4 bg-muted rounded-2xl group-hover:bg-white/10 transition-colors">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary group-hover:text-white mb-1">
                      Target 2030
                    </p>
                    <p className="text-sm group-hover:text-white/70">
                      Connecting 10 Million+ users across 5 countries.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Core Philosophy (Why MNA ServiceHub?) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold">The Core Philosophy</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground pt-4">
              Our culture is built on three pillars that guide every decision we
              make as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: "Empathy",
                text: "We understand the struggles of both providers and customers.",
              },
              {
                icon: Zap,
                title: "Speed",
                text: "In a digital world, delay is defeat. We prioritize instant results.",
              },
              {
                icon: ShieldCheck,
                title: "Trust",
                text: "Security isn't a feature; it's our foundation.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="space-y-4 group animate-in fade-in zoom-in duration-700"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="size-20 mx-auto rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
                  <item.icon className="size-10 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed px-4">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsExtended;
