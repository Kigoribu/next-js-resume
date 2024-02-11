import { AnimateAppearanceTextByWord } from "@/shared/Animations/AnimateAppearanceTextByWord";
import React, { FC } from "react";

interface IDescriptionProps {
  text: string;
  delay: number;
}

export const Description: FC<IDescriptionProps> = ({ text, delay }) => {
  return (
    <p className="text-lg w-full mt-5 font-extralight text-cyan-50 leading-snug whitespace-pre-wrap">
      <AnimateAppearanceTextByWord delay={delay} text={text} />
    </p>
  );
};
