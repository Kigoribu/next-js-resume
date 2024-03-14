import React from "react";
import { FullPageScroll } from "@/features/FullPageScroll/FullPageScroll";
import { Header } from "@/entities/Header/Header";
import "./page.css";
import { NameBlock } from "@/entities/Blocks/NameBlock/NameBlock";
import { AboutBlock } from "@/entities/Blocks/AboutBlock/AboutBlock";
import { SkillsBlock } from "@/entities/Blocks/SkillsBlock/SkillsBlock";
import { ExpirienceBlock } from "@/entities/Blocks/ExpirienceBlock/ExpirienceBlock";
import { Pagination } from "@/widgets/Pagination/Pagination";
import { PageContextProvider } from "@/features/FullPageScroll/context/PageContextProvider";
import { Background } from "@/features/Background/Background";
import { FullPageBlock } from "@/features/FullPageScroll/FullPageBlock";
import { GitHub } from "@/entities/LayoutElements/GitHub";

export default function Page() {
  return (
    <PageContextProvider>
      <Background />
      <Header />
      <FullPageScroll>
        <FullPageBlock>
          <NameBlock />
        </FullPageBlock>
        <FullPageBlock>
          <AboutBlock />
        </FullPageBlock>
        <FullPageBlock>
          <SkillsBlock />
        </FullPageBlock>
        <FullPageBlock>
          <ExpirienceBlock />
        </FullPageBlock>
      </FullPageScroll>
      <Pagination />
      <GitHub />
    </PageContextProvider>
  );
}
