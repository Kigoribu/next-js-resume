"use client";
import { createContext } from "react";
import { IPageContext } from "./types/IPageContext";

export const PageContext = createContext<IPageContext>(null!);
