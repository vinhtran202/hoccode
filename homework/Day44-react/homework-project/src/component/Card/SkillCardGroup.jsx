import React from "react";
import {
  Frontend,
  MobileApp,
  Technology,
  Testing,
  WebOptimization,
  UserCentric,
} from "./SkillCard";

export default function SkillCardGroup() {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      <Frontend />
      <MobileApp />
      <Technology />
      <Testing />
      <WebOptimization />
      <UserCentric />
    </div>
  );
}
