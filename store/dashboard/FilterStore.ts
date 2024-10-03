import { create } from "zustand";

type FilterStore = {
  selectedType: string | null;
  setSelectedType: (type: string | React.SetStateAction<string | null>) => void;
};

export const FilterStore = create<FilterStore>((set) => ({
  selectedType: null,
  setSelectedType: (type) => set((state) => ({
    selectedType: typeof type === 'function' ? (type as (prevState: string | null) => string | null)(state.selectedType) : type
  })),
}));
