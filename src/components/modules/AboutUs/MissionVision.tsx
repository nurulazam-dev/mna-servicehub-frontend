"use client";

import { Target, Eye, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function MissionVision() {
  return (
    <section className="py-12">
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
                transparent, secure, and efficient ecosystem where talent meets
                demand instantly. We aim to empower every skilled individual in
                Bangladesh to become their own boss.
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
                household name, synonymous with quality, trust, and professional
                growth for millions.
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
  );
}
