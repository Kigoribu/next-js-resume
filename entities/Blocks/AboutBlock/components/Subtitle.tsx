import React, { FC, HTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ISubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  delay: number;
}

export const Subtitle: FC<ISubtitleProps> = ({ text, delay }) => {
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
        delay: custom * 0.1 + delay,
      },
    }),
  };

  return (
    <p className="text-2xl text-gray-200 font-medium whitespace-pre-wrap">
      {text.split(" ").map((word, i) => (
        <motion.span
          aria-hidden="true"
          key={i}
          custom={i}
          variants={wordAnimante}
          className="inline-block"
        >
          {word + " "}
        </motion.span>
      ))}
    </p>
  );
};
