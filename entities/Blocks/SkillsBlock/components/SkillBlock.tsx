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
      className="rounded-xl lg:h-36 lg:w-36 h-16 w-16 flex justify-center items-center flex-col text-white cursor-pointer"
    >
      {children}
      <span className="font-semibold text-lg text-white">{title}</span>
    </motion.div>
  );
};
