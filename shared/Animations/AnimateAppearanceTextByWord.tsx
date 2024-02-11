import React, { FC } from "react";
import { motion } from "framer-motion";

interface IAnimateAppearanceTextByWordProps {
  text: string;
  delay?: number;
  speedOffset?: number;
}

export const AnimateAppearanceTextByWord: FC<IAnimateAppearanceTextByWordProps> = ({
  text,
  delay = 0,
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
        delay: custom * speedOffset + delay, //TODO: Поменять speedOffset на другое, понятное значение
      },
    }),
  };
  return (
    <>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          custom={i}
          initial="hidden"
          whileInView="show"
          variants={wordAnimante}
          className="inline-block"
        >
          {word + " "}
        </motion.span>
      ))}
    </>
  );
};
