import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import NavBar from "../../NavBar";
import Footer from "../../Footer";
import imdb from "../../../assets/images/imdb.svg";
import { getMovieDetails } from "../../../api/api";
import useListStore from "../../../store/useListStore";

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
      <div className=" bg-gray-800 flex flex-col gap-8">
        <NavBar />
        <div className="bg-gray-600 flex flex-col md:p-4 md:flex-row md:gap-2 gap-1 p-1 mx-2 rounded-sm self-center">
          <img
            className="rounded-sm size-60 md:size-80 self-center "
            src={movie.Poster}
            alt="movie's poster"
          />
          <div className="text-gray-100 font-['Montserrat'] flex flex-col gap-1 p-1">
            <p className="text-2xl md:text-xl md:w-110 lg:text-2xl lg:w-140 font-bold text-center mb-2 sm:text-3xl">
              {movie.Title}
            </p>
            <p className="text-[10px] sm:text-xs text-justify md:w-110 lg:w-150">
              <span className="font-bold text-amber-600  text-xs sm:text-md">
                Plot:{" "}
              </span>
              {movie.Plot}
            </p>
            <p className="text-[10px] mt-2 md:mt-4 sm:text-xs">
              {" "}
              <span className="font-bold text-amber-600 text-xs sm:text-md">
                Director:{" "}
              </span>
              {movie.Director}
            </p>
            <p className=" text-[10px] sm:text-xs">
              <span className="font-bold text-amber-600 text-xs sm:text-md">
                Actors:{" "}
              </span>
              {movie.Actors}
            </p>
            <p className=" text-[10px] sm:text-xs">
              <span className="font-bold text-amber-600 text-xs sm:text-md">
                Genre:{" "}
              </span>
              {movie.Genre}
            </p>
            <p className=" text-[10px] sm:text-xs">
              <span
                className="font-bold text-amber-600 text-xs sm:text-md
              "
              >
                Released:{" "}
              </span>
              {movie.Released}
            </p>
            <div className="flex flex-row items-center gap-2">
              <img className="size-8" src={imdb} alt="imdb-image" />
              <p className="text-xs">{movie.imdbRating}</p>
            </div>
            <div className="flex flex-row justify-between mt-10">
              <p className="text-[8px] sm:text-[10px] border-1 rounded-full w-16 flex flex-row items-center justify-center">
                {movie.Runtime}
              </p>
              <button
                onClick={() => addToWatchList(movie)}
                className="text-[10px] text-xs bg-gray-900 p-2 rounded-sm cursor-pointer hover:bg-gray-950 transition delay-10"
              >
                Add to watchlist
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MovieStatus;
