"use client";

import AboutUsHeader from "./AboutUsHeader";
import ValueProposition from "./ValueProposition";
import AboutUsDetailedInfo from "./AboutUsDetailedInfo";
import AboutOurGoal from "./AboutOurGoal";
import AboutOurCompany from "./AboutOurCompany";
import AboutUsCountdown from "./AboutUsCountdown";
import MissionVision from "./MissionVision";
import CorePhilosophy from "./CorePhilosophy";

const AboutUsComp = () => {
  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      <AboutUsHeader />
      <ValueProposition />
      <AboutUsDetailedInfo />
      <AboutOurGoal />
      <AboutOurCompany />
      <AboutUsCountdown />
      <MissionVision />
      <CorePhilosophy />
    </div>
  );
};

export default AboutUsComp;
