import { create } from "zustand";
const useListStore = create((set) => ({
  watchList: [],
  addToWatchList: (newList) => {
    set((state) => ({
      watchList: [...state.watchList, newList],
    }));
  },
}));
export default useListStore;
