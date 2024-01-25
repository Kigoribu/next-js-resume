"use client";
import React, { useEffect, useRef } from "react";
import { FullPageScroll } from "@/features/FullPageScroll/FullPageScroll";
import { Header } from "@/entities/Header/Header";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import "./page.css";
import { Name } from "@/entities/Name/Name";
import { About } from "@/entities/Blocks/About/About";
import { Skills } from "@/entities/Blocks/Skills/Skills";
import { Expirience } from "@/entities/Blocks/Expirience/Expirience";
import { Pagination } from "@/widgets/Pagination/Pagination";

export default function Test() {
  const refNameSection = useRef(null);
  const refAboutSection = useRef(null);
  const refSkillsSection = useRef(null);
  const refExpirienceSection = useRef(null);

  return (
    <>
      <Header refNameSection={refNameSection} />
      <FullPageScroll>
        <div className="panel" ref={refNameSection}>
          <Name refNameSection={refNameSection} />
        </div>
        <div className="panel page__about" ref={refAboutSection}>
          <About />
        </div>
        <div className="panel page__skills" ref={refSkillsSection}>
          <Skills />
        </div>
        <div className="panel page__expirience" ref={refExpirienceSection}>
          <Expirience />
        </div>
        <div className="panel">five</div>
      </FullPageScroll>
      <Pagination refs={{ refNameSection, refAboutSection, refSkillsSection, refExpirienceSection }} />
    </>
  );
}
