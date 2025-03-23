import { useQuery } from "@tanstack/react-query";
import Footer from "./Footer";
const apiKey = "387501be";
async function fetchMovie() {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=movie`
  );
  if (!response.ok) throw new Error("Failed to fetch the data");
  return response.json();
}
function MovieData() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovie,
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
            <p className="font-bold text-md pt-8 ">{data.Title}</p>
            <p className="text-xs w-60 pt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex flex-row gap-18 pt-4">
              <p className="text-[10px] border-1 p-1 w-16 rounded-full flex flex-row items-center justify-center">
                49 mins
              </p>
              <button className=" cursor-pointer font-['Rubik'] text-xs text-gray-100 p-2 bg-gray-900 rounded-sm hover:bg-gray-800">
                Add to watchlist
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
