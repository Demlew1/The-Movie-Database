import { create } from "zustand";
const useSearchStore = create((set) => ({
  searchText: "",
  setSearchText: (text) => set({ searchTerm: text }),
}));
export default useSearchStore;
