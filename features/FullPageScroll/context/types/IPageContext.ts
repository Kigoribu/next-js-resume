import { Dispatch, SetStateAction } from "react";

export interface IPageContext {
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
}
