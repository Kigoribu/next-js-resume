"use client";
import React from "react";
import { ComplexStage } from "./components/ComplexStage";
import { motion } from "framer-motion";
import { FullPageBlock } from "@/features/FullPageScroll/FullPageBlock";
import { PageTitle } from "@/shared/PageTitle";

export const ExpirienceBlock = () => {
  return (
    <FullPageBlock>
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.8 }}
        className="w-full h-full flex items-center justify-center flex-col"
      >
        <ComplexStage />
      </motion.section>
    </FullPageBlock>
  );
};
