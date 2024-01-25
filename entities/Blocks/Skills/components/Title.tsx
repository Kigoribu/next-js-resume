import { AnimateWord } from "@/shared/AnimateWord";
import { motion } from "framer-motion";
import React, { FC } from "react";

interface ITitleProps {
  title: string;
  delay: number;
}

export const Title: FC<ITitleProps> = ({ title, delay }) => {
  return (
    <h2 className="text-3xl font-bold text-cyan-50">
      <AnimateWord speedOffset={0.05} word={title} index={0} />
    </h2>
  );
};
