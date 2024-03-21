import { create } from "zustand";

interface GlobalState {
  currentPage: string;
  setNextPage: (page: string) => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  currentPage: location.hash,
  setNextPage: (page) => set(() => ({ currentPage: page })),
}));
