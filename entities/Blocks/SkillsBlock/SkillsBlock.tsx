"use client";
import React from "react";
import { AllSkills } from "./components/AllSkills";
import { motion } from "framer-motion";
import { Title } from "./components/Title";
import { Description } from "./components/Description";
import { FullPageBlock } from "@/features/FullPageScroll/FullPageBlock";
import { PageTitle } from "@/shared/PageTitle";

export const SkillsBlock = () => {
  return (
    <FullPageBlock>
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.8 }}
        className="container mx-auto lg:px-72 px-12 flex justify-center items-center h-full"
      >
        <div className="flex justify-center items-center flex-col lg:text-center gap-3">
          <div>
            <Title title="Навыки" delay={0} />
            <Description delay={0.3} />
          </div>
          <AllSkills />
        </div>
      </motion.section>
    </FullPageBlock>
  );
};
