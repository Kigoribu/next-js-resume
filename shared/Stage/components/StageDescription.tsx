import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes, ReactNode } from "react";

interface IStageDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export const StageDescription: FC<IStageDescriptionProps> = ({ children, className, ...other }) => {
  return (
    <p className={cn("text-lg font-light text-violet-100", className)} {...other}>
      {children}
    </p>
  );
};

StageDescription.displayName = "StageDescription";
