import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
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
    <div className="grid grid-cols-1 place-items-center text-black">demtse</div>
  );
}

export default MovieStatus;
