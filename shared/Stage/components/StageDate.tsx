import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes, ReactNode } from "react";

interface IStageDateProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export const StageDate: FC<IStageDateProps> = ({ children, className, ...other }) => {
  return (
    <p className={cn("text-2xl font-bold text-violet-50", className)} {...other}>
      {children}
    </p>
  );
};

StageDate.displayName = "StageDate";
