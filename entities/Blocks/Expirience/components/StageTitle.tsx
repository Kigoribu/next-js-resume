import React, { FC, ReactNode } from "react";

interface IStageTitleProps {
  children: ReactNode;
}

export const StageTitle: FC<IStageTitleProps> = ({ children }) => {
  return <p className="text-xl font-bold text-violet-100 w-4/5">{children}</p>;
};

StageTitle.displayName = "StageTitle";
