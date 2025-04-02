import { create } from "zustand";
const useListStore = create((set) => ({
  watchList: [],
  addToWatchList: (newMovie) => {
    set((state) => ({
      watchList: state.watchList.some(
        (movie) => movie.imdbID === newMovie.imdbID
      )
        ? state.watchList
        : [...state.watchList, { ...newMovie, userRating: 0 }],
    }));
  },
  removeFromList: (id) => {
    set((state) => ({
      watchList: state.watchList.filter((movie) => movie.imdbID !== id),
    }));
  },
  updateRating: (imdbID, newRating) => {
    set((state) => ({
      watchList: state.watchList.map((movie) =>
        movie.imdbID === imdbID ? { ...movie, userRating: newRating } : movie
      ),
    }));
  },
}));

export default useListStore;
