import { create } from "zustand";

type useFilterStoreType = {
  type: string[];
  language: string[];
  search: string;
  setType: (value: string[]) => void;
  setLanguage: (value: string[]) => void;
  setSearch: (value: string) => void;
};

const useFilterStore = create<useFilterStoreType>((set) => ({
  type: [],
  language: [],
  search: "",
  setType: (value: string[]) => set({ type: value }),
  setLanguage: (value: string[]) => set({ language: value }),
  setSearch: (value: string) => set({ search: value }),
}));

export default useFilterStore;
