"use client";
import React from "react";
import { AllSkills } from "./components/AllSkills";
import { motion } from "framer-motion";
import { Title } from "./components/Title";
import { Description } from "./components/Description";
import { FullPageBlock } from "@/features/FullPageScroll/FullPageBlock";

export const SkillsBlock = () => {
  return (
    <FullPageBlock>
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.8 }}
        className="container mx-auto lg:px-72 px-12 flex justify-center items-center h-full"
      >
        <div className="flex justify-center items-center flex-col lg:text-center gap-3">
          <div>
            <Title title="Навыки" delay={0} />
            <Description
              delay={0.3}
              text="Основная область деятельности - разработка React приложений. Я разрабатывал приложения для среднего бизнеса: личный кабинет клиента, табличные представления данных о предоставляемых сервисах, учавствовал в разработке интранета компании на CMS Bitrix, имел опыт работы с Tilda. Мне также интересна область Backend разработки, поэтому в свободное время изучаю NestJS."
            />
          </div>
          <AllSkills />
        </div>
      </motion.section>
    </FullPageBlock>
  );
};
