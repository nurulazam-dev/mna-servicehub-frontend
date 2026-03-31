import { Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutUsDetailedInfo() {
  return (
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
                MNA ServiceHub is designed to be the ultimate ecosystem. Whether
                you are a **Customer** looking for home repairs, a **Service
                Provider** wanting to expand your business, or a **Job
                Candidate** seeking career growth—we provide the tools to make
                it happen.
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
  );
}
