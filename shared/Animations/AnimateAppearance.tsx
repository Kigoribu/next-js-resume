import React, { FC } from "react";
import { motion } from "framer-motion";

interface IAnimateAppearanceProps {
  word: string;
  delay?: number;
  index: number;
  speedOffset?: number;
}

export const AnimateAppearance: FC<IAnimateAppearanceProps> = ({
  word,
  delay = 0,
  index,
  speedOffset = 0.05,
}) => {
  const wordAnimante = {
    hidden: {
      y: `0.25em`,
      opacity: 0,
    },
    show: (custom: number) => ({
      y: `0em`,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: custom * speedOffset + delay,
      },
    }),
  };
  return (
    <motion.span aria-hidden="true" custom={index} variants={wordAnimante} className="inline-block">
      {word + " "}
    </motion.span>
  );
};
