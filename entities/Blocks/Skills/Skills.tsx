import React from "react";
import { AllSkills } from "./components/AllSkills";
import { motion } from "framer-motion";
import { Title } from "./components/Title";
import { Description } from "../About/components/Description";

export const Skills = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.8 }}
      className="w-full h-full flex justify-center items-center"
    >
      <div className="max-w-[60%] flex justify-center items-center flex-col text-center gap-3">
        <div className="px-[10%]">
          <Title title="Навыки" delay={0} />
          <Description
            delay={0.3}
            text="Основная область деятельности - разработка React приложений. Я разрабатывал приложения для среднего бизнеса: личный кабинет клиента, табличные представления данных о предоставляемыхсервисах, учавствовал в разработке интранета компании на CMS Bitrix, имел опыт работы с Tilda. Мне также интересна область Backend разработки, поэтому в свободное время изучаю NestJS."
          />
        </div>
        <AllSkills />
      </div>
    </motion.section>
  );
};
