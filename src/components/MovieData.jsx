import { useQuery } from "@tanstack/react-query";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { getMovie } from "../api/api";
function MovieData() {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovie,
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
      <div className="flex flex-row flex-wrap gap-4 justify-center  pt-8">
        {data.Search.map((data) => (
          <div
            key={data.imdbID}
            className="bg-gray-700 shadow-lg text-gray-200 cursor-pointer p-2 rounded-md font-['Montserrat']  flex flex-col"
          >
            <img className="size-60" src={data.Poster} alt="Movie poster" />
            <p className="font-bold text-md pt-3 ">{data.Title}</p>
            <p className="text-xs mt-2">{data.Year}</p>
            <div className="pt-4 self-center">
              <button
                onClick={() => navigate(`/movies/${data.imdbID}`)}
                className=" cursor-pointer font-['Montserrat'] text-xs w-60 text-gray-100 p-2 bg-gray-900 rounded-sm hover:bg-gray-950 transition delay-10"
              >
                View details
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default MovieData;
