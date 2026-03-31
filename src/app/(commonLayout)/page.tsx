import AboutOurCompany from "@/components/modules/AboutUs/AboutOurCompany";
import AboutOurGoal from "@/components/modules/AboutUs/AboutOurGoal";
import AboutUsDetailedInfo from "@/components/modules/AboutUs/AboutUsDetailedInfo";
import ValueProposition from "@/components/modules/AboutUs/ValueProposition";
import Hero from "@/components/modules/HomePage/Hero";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-(--breakpoint-xl)">
      <Hero />
      <AboutUsDetailedInfo />
      <AboutOurGoal />
      <AboutOurCompany />
      <ValueProposition />
    </main>
  );
}
