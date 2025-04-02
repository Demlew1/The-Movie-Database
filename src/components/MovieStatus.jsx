import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import imdb from "../assets/images/imdb.svg";
import { getMovieDetails } from "../api/api";
import useListStore from "../store/useListStore";
import Rating from "./Rating";
function MovieStatus() {
  const addToWatchList = useListStore((state) => state.addToWatchList);
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movieData", id],
    queryFn: () => getMovieDetails(id),
  });
  if (isLoading)
    return (
      <p className="text-center text-white font-mono h-screen">Loading...</p>
    );
  if (isError)
    return (
      <p className="text-red-500 text-center font-mono h-screen">
        {error.message}
      </p>
    );
  console.log(movie);
  return (
    <div>
      <div className="px-8 pt-8 h-screen  bg-gray-800 flex flex-col gap-8">
        <NavBar />
        <div className="bg-gray-600 w-250 flex flex-row gap-4 p-4 self-center">
          <img
            className="rounded-sm size-90 self-center "
            src={movie.Poster}
            alt="movie's poster"
          />
          <div className="text-gray-100 font-['Montserrat'] flex flex-col gap-1 p-2">
            <p className="text-2xl font-bold text-center mb-4">{movie.Title}</p>
            <p className="text-xs text-justify">
              <span className="font-bold text-amber-600">Plot: </span>
              {movie.Plot}
            </p>
            <p className="text-xs mt-8">
              {" "}
              <span className="font-bold text-amber-600">Director: </span>
              {movie.Director}
            </p>
            <p className=" text-xs">
              <span className="font-bold text-amber-600">Actors: </span>
              {movie.Actors}
            </p>
            <p className=" text-xs">
              <span className="font-bold text-amber-600">Genre: </span>
              {movie.Genre}
            </p>
            <p className=" text-xs">
              <span className="font-bold text-amber-600">Released: </span>
              {movie.Released}
            </p>
            <Rating />
            <div className="flex flex-row justify-between mt-10">
              <div className="flex flex-row items-center gap-2">
                <img className="size-10 " src={imdb} alt="imdb-image" />
                <p className="text-sm">{movie.imdbRating}</p>
              </div>
              <p className="text-[10px] border-1 p-1 rounded-full w-18 flex flex-row items-center justify-center">
                {movie.Runtime}
              </p>
              <button
                onClick={() => addToWatchList(movie)}
                className="text-xs bg-gray-900 p-2 rounded-sm cursor-pointer hover:bg-gray-950 transition delay-10"
              >
                Add to watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MovieStatus;
