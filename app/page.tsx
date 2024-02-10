"use client";
import React, { useEffect, useRef, useState } from "react";
import { FullPageScroll } from "@/features/FullPageScroll/FullPageScroll";
import { Header } from "@/entities/Header/Header";
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

  const [isLoadingFinish, setIsLoadingFinish] = useState(false);

  useEffect(() => {
    if (refNameSection && refAboutSection && refSkillsSection && refExpirienceSection) {
      setIsLoadingFinish(true);
    }
  }, [refNameSection, refAboutSection, refSkillsSection, refExpirienceSection]);

  return isLoadingFinish ? (
    <>
      <Header refNameSection={refNameSection} />
      <FullPageScroll>
        <div className="panel" ref={refNameSection}>
          <Name refNameSection={refNameSection} />
        </div>
        <div className="panel gr-background" ref={refAboutSection}>
          <About />
        </div>
        <div className="panel gr-background" ref={refSkillsSection}>
          <Skills />
        </div>
        <div className="panel gr-background" ref={refExpirienceSection}>
          <Expirience />
        </div>
      </FullPageScroll>
      <Pagination
        refs={{ refNameSection, refAboutSection, refSkillsSection, refExpirienceSection }}
      />
    </>
  ) : (
    "loading"
  );
}
