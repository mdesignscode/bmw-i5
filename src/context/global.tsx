"use client";

import { createContext, useState } from "react";
import { IGlobalContext, initialGlobalContext } from "./global.initial";

export const GlobalContext = createContext(initialGlobalContext);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  // global state
  const [currentPage, setCurrentPage] = useState(
    initialGlobalContext.currentPage
  );

  // store object
  const store: IGlobalContext = {
    currentPage,
    setCurrentPage,
  };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
}
