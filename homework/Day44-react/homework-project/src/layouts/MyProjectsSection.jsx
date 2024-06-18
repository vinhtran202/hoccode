import React from "react";
import ProjectsSection from "../component/layouts/ProjectsSection";
import ProjectCardGroup from "../component/Card/ProjectCardGroup";

export default function MyProjectsSection() {
  return (
    <div className="py-28 px-8">
      <ProjectsSection />
      <ProjectCardGroup />
      <ProjectCardGroup />
    </div>
  );
}
