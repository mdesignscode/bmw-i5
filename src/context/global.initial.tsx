import { Dispatch, SetStateAction } from "react";

type TCurrentPage = {
  name: string;
};

export interface IGlobalContext {
  currentPage: TCurrentPage;
  setCurrentPage: Dispatch<SetStateAction<TCurrentPage>>;
}

export const initialGlobalContext: IGlobalContext = {
  currentPage: {
    name: location.hash,
  },
  setCurrentPage: () => {},
};
