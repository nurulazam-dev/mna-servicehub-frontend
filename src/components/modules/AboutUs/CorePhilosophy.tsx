"use client";

import { Heart, Zap, ShieldCheck } from "lucide-react";

const CorePhilosophy = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto mb-8 space-y-4">
          <h2 className="text-4xl font-bold">The Core Philosophy</h2>
          <p className="text-muted-foreground">
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
              className="space-y-2 group animate-in fade-in zoom-in duration-700 border hover:border-sky-500 py-4 rounded-md"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="size-20 mx-auto rounded-full border border-border flex items-center justify-center group-hover:border-sky-500 group-hover:bg-primary/5 transition-all duration-500">
                <item.icon className="size-14 text-muted-foreground group-hover:text-sky-500 transition-colors" />
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
  );
};

export default CorePhilosophy;
