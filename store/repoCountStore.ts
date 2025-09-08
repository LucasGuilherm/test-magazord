import { create } from "zustand";

type useRepoCountStoreType = {
  repo: number;
  starred: number;
  setCount: (value: { tipo: "repo" | "starred"; count: number }) => void;
};

const useRepoCountStore = create<useRepoCountStoreType>((set) => ({
  repo: 0,
  starred: 0,
  setCount: ({ tipo, count }) => set({ [tipo]: count }),
}));

export default useRepoCountStore;
