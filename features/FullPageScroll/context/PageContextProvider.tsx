"use client";
import React, { FC, ReactNode, useState } from "react";
import { PageContext } from "./PageContext";

interface IPageContextProviderProps {
  children: ReactNode;
}

export const PageContextProvider: FC<IPageContextProviderProps> = ({ children }) => {
  const [pageNum, setPageNum] = useState<number>(0);

  return <PageContext.Provider value={{ pageNum, setPageNum }}>{children}</PageContext.Provider>;
};
