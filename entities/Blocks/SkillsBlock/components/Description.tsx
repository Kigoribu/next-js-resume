import { AnimateAppearanceTextByWord } from "@/shared/Animations/AnimateAppearanceTextByWord";
import React, { FC } from "react";

interface IDescriptionProps {
  delay: number;
}

export const Description: FC<IDescriptionProps> = ({ delay }) => {
  return (
    <p className="text-lg w-full mt-5 font-extralight text-gray-300 leading-snug whitespace-pre-wrap">
      <AnimateAppearanceTextByWord delay={delay}>
        Основная область деятельности - разработка
        <span className="font-bold text-white">React</span>
        приложений. Я разрабатывал приложения для среднего бизнеса:
        <span className="font-bold text-white">личный кабинет клиента,</span> табличные
        представления данных о предоставляемых сервисах, учавствовал в разработке интранета компании
        на CMS Bitrix, имел опыт работы с Tilda. Мне также интересна область Backend разработки,
        поэтому в свободное время
        <span className="font-bold text-white">изучаю NestJS.</span>
      </AnimateAppearanceTextByWord>
    </p>
  );
};
