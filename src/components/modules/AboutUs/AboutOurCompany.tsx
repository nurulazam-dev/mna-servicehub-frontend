import { TrendingUp, Award, Globe2, History } from "lucide-react";

export default function AboutOurCompany() {
  return (
    <section className="py-12 bg-background">
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
              Founded in 2025, MNA ServiceHub emerged to solve the fragmentation
              in Bangladesh&apos;s service industry. We realized that finding a
              verified plumber, a professional developer, or a reliable
              caregiver shouldn&apos;t be a matter of luck—it should be a matter
              of a few clicks.
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
  );
}
