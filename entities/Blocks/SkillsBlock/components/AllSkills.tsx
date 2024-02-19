import React from "react";
import { SkillBlock } from "./SkillBlock";
import { skillsData } from "../data/skillsData";
import { AnimateSpringAppearance } from "@/shared/Animations/AnimateSpringAppearance";

export const AllSkills = () => {
  return (
    <div className="max-w-full flex-wrap justify-center lg:gap-6 gap-1 lg:gap-y-12 gap-y-6 mt-12 hidden md:flex">
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
