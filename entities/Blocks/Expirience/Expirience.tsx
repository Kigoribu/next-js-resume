import React from "react";
import { ComplexStage } from "./components/ComplexStage";
import { AnimateWord } from "@/shared/AnimateWord";
import { motion } from "framer-motion";

export const Expirience = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.8 }}
      className="w-full h-full flex items-center flex-col"
    >
      <div className="px-[10%]">
        <h2 className="text-3xl font-bold text-cyan-50 pt-64">
          <AnimateWord word="Опыт" index={0} />
        </h2>
      </div>
      <ComplexStage />
    </motion.section>
  );
};
