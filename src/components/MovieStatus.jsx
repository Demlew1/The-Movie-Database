import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import imdb from "../assets/images/imdb.svg";
const apiKey = "387501be";
async function fetchMovieDetails(id) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`
  );
  if (!response.ok) throw new Error("Error fetching the movie data");
  return response.json();
}
function MovieStatus() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movieData", id],
    queryFn: () => fetchMovieDetails(id),
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
  console.log(data);
  return (
    <div>
      <div className="px-8 pt-8 h-screen  bg-gray-800 flex flex-col gap-8">
        <NavBar />
        <div className="bg-gray-600 w-250 flex flex-row gap-4 p-4 self-center">
          <img
            className="rounded-sm size-80 self-center "
            src={data.Poster}
            alt="movie's poster"
          />
          <div className="text-gray-100 font-['Montserrat'] p-2">
            <p className="text-2xl font-bold text-center mb-4">{data.Title}</p>
            <p className="text-xs text-justify">
              <span className="font-bold text-amber-600">Plot: </span>
              {data.Plot}
            </p>
            <p className="text-xs mt-8">
              {" "}
              <span className="font-bold text-amber-600">Director: </span>
              {data.Director}
            </p>
            <p className=" text-xs">
              <span className="font-bold text-amber-600">Actors: </span>
              {data.Actors}
            </p>
            <p className=" text-xs">
              <span className="font-bold text-amber-600">Genre: </span>
              {data.Genre}
            </p>
            <p className=" text-xs">
              <span className="font-bold text-amber-600">Released: </span>
              {data.Released}
            </p>
            <div className="flex flex-row justify-between mt-4">
              <div className="flex flex-row items-center gap-2">
                <img className="size-10 " src={imdb} alt="imdb-image" />
                <p className="text-sm">{data.imdbRating}</p>
              </div>
              <p className="text-[10px] border-1 p-1 rounded-full w-18 flex flex-row items-center justify-center">
                {data.Runtime}
              </p>
              <button className="text-xs bg-gray-900 p-2 rounded-sm cursor-pointer hover:bg-gray-800 ">
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
