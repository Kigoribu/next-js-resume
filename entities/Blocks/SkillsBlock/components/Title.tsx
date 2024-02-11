import { AnimateAppearanceTextByWord } from "@/shared/Animations/AnimateAppearanceTextByWord";
import React, { FC } from "react";

interface ITitleProps {
  title: string;
  delay: number;
}

export const Title: FC<ITitleProps> = ({ title, delay }) => {
  return (
    <h2 className="text-3xl font-bold text-cyan-50">
      <AnimateAppearanceTextByWord speedOffset={0.05} text={title} />
    </h2>
  );
};
