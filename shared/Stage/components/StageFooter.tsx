import { cn } from "@/lib/utils";
import React, { FC, HTMLAttributes, ReactNode } from "react";

interface IStageFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const StageFooter: FC<IStageFooterProps> = ({ children, className, ...other }) => {
  return (
    <div className={cn("flex flex-col", className)} {...other}>
      {children}
    </div>
  );
};

StageFooter.displayName = "StageFooter";
