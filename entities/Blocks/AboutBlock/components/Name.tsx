import { AnimateAppearanceTextByWord } from "@/shared/Animations/AnimateAppearanceTextByWord";
import { useInView, motion } from "framer-motion";
import React, { FC, HTMLAttributes, useRef } from "react";

interface INameProps extends HTMLAttributes<HTMLHeadElement> {
  name: string;
  delay: number;
}

export const Name: FC<INameProps> = ({ name, delay }) => {
  return (
    <h2 className="text-3xl font-bold tracking-tighter text-cyan-50 whitespace-pre">
      <AnimateAppearanceTextByWord speedOffset={0.1} delay={delay} text={name} />
    </h2>
  );
};
