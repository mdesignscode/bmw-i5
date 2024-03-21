import { Dispatch, SetStateAction } from "react";

export interface IGlobalContext {
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
}

export const initialGlobalContext: IGlobalContext = {
  currentPage: location.hash,
  setCurrentPage: () => {},
};
