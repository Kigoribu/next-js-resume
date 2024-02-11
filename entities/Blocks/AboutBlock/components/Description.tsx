import React, { FC, HTMLAttributes } from "react";
import { AnimateAppearanceTextByWord } from "@/shared/Animations/AnimateAppearanceTextByWord";

interface IAboutProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  delay: number;
}

export const Description: FC<IAboutProps> = ({ text, delay }) => {
  return (
    <p className="text-lg w-full mt-5 font-extralight text-cyan-50 leading-snug whitespace-pre-wrap">
      <AnimateAppearanceTextByWord delay={delay} text={text} />
    </p>
  );
};
