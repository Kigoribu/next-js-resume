import React from "react";
import { SkillBlock } from "./SkillBlock";
import { skillsData } from "../data/skillsData";
import { AnimateSpringAppearance } from "@/shared/Animations/AnimateSpringAppearance";

export const AllSkills = () => {
  return (
    <div className="flex max-w-full flex-wrap justify-center gap-6 gap-y-12 mt-12">
      {skillsData.map((skill, i) => (
        <AnimateSpringAppearance key={i} delay={i * 0.1}>
          <SkillBlock key={i} title={skill.title}>
            {skill.icon}
          </SkillBlock>
        </AnimateSpringAppearance>
      ))}
    </div>
  );
};
