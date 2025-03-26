import { create } from "zustand";
const useListStore = create((set) => ({
  watchList: [],
  addToWatchList: (newMovie) => {
    set((state) => ({
      watchList: state.watchList.some(
        (movie) => movie.imdbID === newMovie.imdbID
      )
        ? state.watchList
        : [...state.watchList, newMovie],
    }));
  },
  removeFromList: (id) => {
    set((state) => ({
      watchList: state.watchList.filter((movie) => movie.imdbID !== id),
    }));
  },
}));
export default useListStore;
