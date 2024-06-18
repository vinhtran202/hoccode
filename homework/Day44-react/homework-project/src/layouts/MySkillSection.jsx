import React from "react";
import SkillsSection from "../component/layouts/SkillsSection";
import SkillCardGroup from "../component/Card/SkillCardGroup";

export default function MySkillSection() {
  return (
    <div className="px-8">
      <SkillsSection />
      <SkillCardGroup />
    </div>
  );
}
