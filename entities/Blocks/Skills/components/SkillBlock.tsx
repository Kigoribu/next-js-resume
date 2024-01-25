import React, { FC, ReactElement } from "react";
import { motion } from "framer-motion";

interface ISkillBlockProps {
  title: string;
  children: ReactElement;
}

export const SkillBlock: FC<ISkillBlockProps> = ({ title, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="rounded-xl h-52 w-52 flex justify-center items-center flex-col text-cyan-50 cursor-pointer"
    >
      {children}
      <span className="font-bold text-xl">{title}</span>
    </motion.div>
  );
};
