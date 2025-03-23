import { useQuery } from "@tanstack/react-query";
const apiKey = "387501be";
async function fetchMovieDetails(id) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`
  );
  if (response.ok) throw new Error("Error fetching the movie data");
}
function MovieStatus() {
  return <div className="grid grid-cols-1 place-items-center"></div>;
}

export default MovieStatus;
