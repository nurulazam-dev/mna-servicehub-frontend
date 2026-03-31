"use client";

import AboutUsExtended from "./AboutUsExtended";
import AboutUsHeader from "./AboutUsHeader";
import ValueProposition from "./ValueProposition";
import AboutUsDetailedInfo from "./AboutUsDetailedInfo";
import AboutOurGoal from "./AboutOurGoal";

const AboutUsComp = () => {
  return (
    <div className="flex flex-col w-full bg-background text-foreground">
      <AboutUsHeader />
      <ValueProposition />
      <AboutUsDetailedInfo />
      <AboutOurGoal />
      <AboutUsExtended />
    </div>
  );
};

export default AboutUsComp;
