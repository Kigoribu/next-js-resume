import React, { FC } from "react";

interface IStageTitleProps {
  children: JSX.Element;
}

export const StageTitle: FC<IStageTitleProps> = ({ children = null }) => {
  return <>{children}</>;
};
