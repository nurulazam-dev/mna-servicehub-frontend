import AboutOurCompany from "@/components/modules/AboutUs/AboutOurCompany";
import AboutOurGoal from "@/components/modules/AboutUs/AboutOurGoal";
import AboutUsDetailedInfo from "@/components/modules/AboutUs/AboutUsDetailedInfo";
import ValueProposition from "@/components/modules/AboutUs/ValueProposition";
import ContactUs from "@/components/modules/HomePage/ContactUs";
import GoogleMapLocation from "@/components/modules/HomePage/GoogleMapLocation";
import Hero from "@/components/modules/HomePage/Hero";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-(--breakpoint-xl)">
      <Hero />
      <ValueProposition />
      <AboutUsDetailedInfo />
      {/* serviceR process */}
      <AboutOurGoal />
      <AboutOurCompany />
      {/* review */}
      <GoogleMapLocation />
      <ContactUs />
    </main>
  );
}
