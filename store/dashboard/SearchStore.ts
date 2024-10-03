import { create } from "zustand";
type SearchStore = {
  search: string;
  setSearch: (search: string) => void;
};

export const SearchStore = create<SearchStore>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
}));
