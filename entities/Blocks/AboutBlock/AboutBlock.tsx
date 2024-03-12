"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { Name } from "./components/Name";
import { Subtitle } from "./components/Subtitle";
import { Description } from "./components/Description";
import { Blot } from "./components/ImageCompose/ImageCompose";

interface IAboutBlockProps {}

export const AboutBlock: FC<IAboutBlockProps> = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.8 }}
      className="grid grid-cols-1 md:grid-cols-2 text-white min-h-screen w-full justify-center items-center container mx-auto lg:px-72 px-12"
    >
      <div className="leading-none">
        <Name name="Кирилл Горбунов" delay={0} />
        <Subtitle text="Фронтэнд разработчик" delay={0.3} />
        <Description delay={0.6} />
      </div>
      <Blot delay={0} className="hidden md:block" />
    </motion.section>
  );
};
