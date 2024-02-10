import { AnimateAppearance } from "@/shared/Animations/AnimateAppearance";
import React, { FC } from "react";

interface IDescriptionProps {
  text: string;
  delay: number;
}

export const Description: FC<IDescriptionProps> = ({ text, delay }) => {
  return (
    <p className="text-base font-medium text-cyan-50 whitespace-pre-wrap">
      {text.split(" ").map((word, i) => (
        <AnimateAppearance key={i} delay={delay} index={i} word={word} />
      ))}
    </p>
  );
};
