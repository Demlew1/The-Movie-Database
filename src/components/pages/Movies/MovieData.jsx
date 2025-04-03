import { useQuery } from "@tanstack/react-query";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";
import { getMovie, searchMovies } from "../../../api/api";
import useSearchStore from "../../../store/useSearchStore";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import MovieSkeleton from "./MovieSkeleton";
function MovieData() {
  const [currentPage, setCurrentPage] = useState(1);
  const searchText = useSearchStore((state) => state.searchText);
  const [debouncedText] = useDebounce(searchText, 500);
  const navigate = useNavigate();
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies", currentPage],

    queryFn: () => getMovie(currentPage),
    staleTime: 10000,
    keepPreviousData: true,
    enabled: !debouncedText,
  });
  const {
    data: searchResults,
    isLoading: isSearching,
    error: searchError,
  } = useQuery({
    queryKey: ["search", debouncedText],
    queryFn: () => searchMovies(debouncedText),
    staleTime: 10000,
    keepPreviousData: true,
    enabled: !!debouncedText,
  });

  const noSearchResults = debouncedText && searchResults?.Response === "False";
  const displayMovies = debouncedText ? searchResults : movie;
  if (isLoading || (isSearching && debouncedText))
    return (
      <div className="flex flex-col">
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          {[...Array(8)].map((_, index) => (
            <MovieSkeleton key={`skeleton-${index}`} />
          ))}
        </div>
      </div>
    );
  if (isError)
    return (
      <p className="text-red-500 text-center text-xs font-mono h-screen">
        {error.message}
      </p>
    );
  if (searchError)
    return (
      <p className="text-red-500 text-center font-mono h-screen">
        {searchError.message}
      </p>
    );

  return (
    <div className="flex flex-col mt-4">
      {noSearchResults && (
        <p className="font-mono text-gray-100 text-center py-10">{`No movies found for "${debouncedText}"`}</p>
      )}
      <div className="flex flex-row flex-wrap gap-4  justify-center ">
        {displayMovies?.Search?.map((movie) => (
          <div
            key={movie.imdbID}
            className=" bg-gray-700 shadow-lg text-gray-200 cursor-pointer p-2 rounded-md font-['Montserrat']  flex flex-col justify-between gap-1"
          >
            <div>
              <img className="size-60" src={movie.Poster} alt="Movie poster" />
              <p className="font-bold text-md pt-3 pl-1 w-60">{movie.Title}</p>
              <p className="text-xs mt-2 pl-1 ">{movie.Year}</p>
            </div>{" "}
            <div className="mt-4 ">
              <button
                onClick={() => navigate(`/movies/${movie.imdbID}`)}
                className="cursor-pointer font-['Montserrat'] text-xs w-60 text-gray-100 p-2 bg-gray-900 rounded-sm hover:bg-gray-950 transition delay-10"
              >
                View details
              </button>
            </div>
          </div>
        ))}
      </div>
      {!debouncedText && (
        <div className="flex flex-row gap-8 justify-center items-center mt-10 font-['Montserrat'] text-gray-800 text-xs font-bold ">
          <button
            className="bg-gray-200 p-2 rounded-md hover:bg-gray-300 cursor-pointer"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            previous
          </button>
          <p className="text-amber-400">{currentPage}</p>
          <button
            className="bg-gray-200 p-2 rounded-md w-14 hover:bg-gray-400  cursor-pointer"
            disabled={!movie?.Search || movie?.Search?.length < 10}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default MovieData;
