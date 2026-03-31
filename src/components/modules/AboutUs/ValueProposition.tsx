import { ShieldCheck, Users, Globe } from "lucide-react";

export default function ValueProposition() {
  return (
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
  );
}
