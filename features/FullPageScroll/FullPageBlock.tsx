"use client";
import { cn } from "@/lib/utils";
import React, { HTMLAttributes, HTMLProps, ReactNode, forwardRef } from "react";

export interface IFullPageBlockProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const FullPageBlock = forwardRef<HTMLDivElement, IFullPageBlockProps>(function FullPageBlock(
  { children, className, ...other },
  ref
) {
  return (
    <div className={cn("panel", className)} {...other} ref={ref}>
      {children}
    </div>
  );
});
