import { create } from "zustand";

type NavigationTabStore = {
  tabSelected: number;
  setTabSelected: (index: number) => void;
};

export const useNavigationStore = create<NavigationTabStore>((set) => ({
  tabSelected: 0,
  setTabSelected: (index: number) => set({ tabSelected: index }),
}));
