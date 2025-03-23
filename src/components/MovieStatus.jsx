import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
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
      <div className="px-8 pt-8 bg-gray-800 h-screen flex flex-col gap-8">
        <NavBar />
        <div className="bg-gray-600 w-200 h-100 flex flex-row p-4 self-center">
          <div className="self-center">
            <img
              className="size-70 rounded-sm"
              src={data.Poster}
              alt="movie's poster"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MovieStatus;
