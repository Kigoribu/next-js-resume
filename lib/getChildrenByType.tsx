import React, { ReactNode } from "react";

export const typeOfComponent = (component: any): string => {
  return (
    component?.type?.displayName ||
    component?.type?.toString().replace("Symbol(react.fragment)", "react.fragment") ||
    undefined
  );
};

export const getChildrenByType = (children: ReactNode, types: string[]): ReactNode[] => {
  return React.Children.toArray(children).filter(
    (child) => types.indexOf(typeOfComponent(child)) !== -1
  );
};
