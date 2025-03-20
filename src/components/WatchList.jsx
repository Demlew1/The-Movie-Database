import NavBar from "./NavBar";
import { useQuery } from "@tanstack/react-query";
import star from "../assets/images/star.svg";
const apiKey = "387501be";
async function fetchData() {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=movie`
  );
  if (!response.ok) throw new Error("failed to fetch your data");
  return response.json();
}
function WatchList() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["watchList"],
    queryFn: fetchData,
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
  return (
    <div className="bg-gray-800 h-screen p-8 overflow-y-scroll">
      <NavBar />
      <div className="bg-gray-600 p-12 rounded-md m-8 flex flex-col gap-6">
        {data.Search.map((data) => (
          <div
            key={data.imdbID}
            className="font-['Montserrat'] bg-gray-500 p-1 px- flex flex-row gap-36 items-center rounded-sm pr-4 cursor-pointer transition delay-5 hover:bg-gray-700"
          >
            <div className="flex flex-row gap-4 items-center">
              <img className="w-48 h-24" src={data.Poster} />
              <div>
                <p className="text-xs font-bold text-gray-100">{data.Title}</p>
                <p className="w-40 text-[10px] text-gray-100 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-100">8.8/10</p>
            <p className="text-xs text-gray-100">148min</p>

            <div className="flex flex-row">
              <img className="size-5 " src={star} alt="star-image" />
              <img className="size-5 " src={star} alt="star-image" />
              <img className="size-5 " src={star} alt="star-image" />
              <img className="size-5 " src={star} alt="star-image" />
              <img className="size-5 " src={star} alt="star-image" />
            </div>
            <button className="font-bold text-[10px] text-gray-300 rounded-md bg-gray-800 p-1 hover:bg-gray-600">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchList;
