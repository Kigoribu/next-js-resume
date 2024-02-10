import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes, ReactNode } from "react";

interface IStageTitleProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export const StageTitle: FC<IStageTitleProps> = ({ children, className, ...other }) => {
  return (
    <p className={cn("text-xl font-bold text-violet-100 w-4/5 mb-4", className)} {...other}>
      {children}
    </p>
  );
};

StageTitle.displayName = "StageTitle";
