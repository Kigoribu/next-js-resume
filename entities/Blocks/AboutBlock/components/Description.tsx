import React, { FC, HTMLAttributes } from "react";
import { AnimateAppearanceTextByWord } from "@/shared/Animations/AnimateAppearanceTextByWord";

interface IAboutProps extends HTMLAttributes<HTMLParagraphElement> {
  delay: number;
}

export const Description: FC<IAboutProps> = ({ delay }) => {
  return (
    <p className="text-lg w-full mt-5 font-extralight text-gray-300 leading-snug whitespace-pre-wrap">
      <AnimateAppearanceTextByWord delay={delay}>
        Я стремлюсь к построению{" "}
        <span className="font-bold text-white">эффективных и высококачественных</span>{" "}
        пользовательских интерфейсов, используя передовые технологии и методики разработки. Мне
        нравится <span className="font-bold text-white">совместная работа</span> и участие в
        <span className="font-bold text-white">интересных и сложных проектах.</span> Я готов к новым
        вызовам и продолжаю расширять свои знания и навыки в области фронтенд разработки и не
        только.
      </AnimateAppearanceTextByWord>
    </p>
  );
};
