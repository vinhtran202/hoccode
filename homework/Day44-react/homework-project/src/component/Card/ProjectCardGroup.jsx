import React from "react";
import {
  SocialPj,
  LandingPagePj,
  MobileAppPj,
  MobileApp2Pj,
} from "./ProjectCard";

export default function ProjectCardGroup() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
      <SocialPj />
      <LandingPagePj />
      <MobileAppPj />
      <MobileApp2Pj />
    </div>
  );
}
