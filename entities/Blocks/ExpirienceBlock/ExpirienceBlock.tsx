import React from "react";
import { ComplexStage } from "./components/ComplexStage";
import { motion } from "framer-motion";
import { FullPageBlock } from "@/features/FullPageScroll/FullPageBlock";

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
        <p className="absolute left-15 bottom-15 text-5xl font-extrabold text-gray-100 opacity-25">
          ОПЫТ
        </p>
      </motion.section>
    </FullPageBlock>
  );
};
