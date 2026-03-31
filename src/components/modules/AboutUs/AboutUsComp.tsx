"use client";

import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AboutUsExtended from "./AboutUsExtended";
import AboutUsHeader from "./AboutUsHeader";
import ValueProposition from "./ValueProposition";
import AboutUsDetailedInfo from "./AboutUsDetailedInfo";

const AboutUsComp = () => {
  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      <AboutUsHeader />
      <ValueProposition />
      <AboutUsDetailedInfo />

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
