import { create } from "zustand";
import { persist } from "zustand/middleware";
const useListStore = create(
  persist((set) => ({
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
  })),
  {
    name: "watchlist-storage",
  }
);

export default useListStore;
