"use client";
import { cn } from "@/lib/utils";
import React, { HTMLAttributes, ReactNode, forwardRef } from "react";

interface IFullPageBlockProps extends HTMLAttributes<HTMLDivElement> {
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
