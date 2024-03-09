"use client";
import React, { FC } from "react";
import { ComplexStage } from "./components/ComplexStage";
import { motion } from "framer-motion";
import { FullPageBlock, IFullPageBlockProps } from "@/features/FullPageScroll/FullPageBlock";
import { PageTitle } from "@/shared/PageTitle";

export const ExpirienceBlock = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.8 }}
      className="w-full h-full flex items-center justify-center flex-col"
    >
      <ComplexStage />
    </motion.section>
  );
};
