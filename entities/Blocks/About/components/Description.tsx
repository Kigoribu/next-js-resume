import React, { FC, HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { AnimateWord } from "@/shared/AnimateWord";

interface IAboutProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  delay: number;
}

export const Description: FC<IAboutProps> = ({ text, delay }) => {
  return (
    <p className="text-xl w-full mt-5 font-extralight text-cyan-50 leading-snug whitespace-pre-wrap">
      {text.split(" ").map((word, i) => (
        <AnimateWord key={i} delay={delay} index={i} word={word} />
      ))}
    </p>
  );
};
