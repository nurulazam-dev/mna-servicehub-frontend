import { Users2, ShieldCheck, ArrowUpRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutUsCountdown() {
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
    <section className="py-12 bg-primary text-primary-foreground relative overflow-hidden">
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
  );
}
