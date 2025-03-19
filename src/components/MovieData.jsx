import { useQuery } from "@tanstack/react-query";
async function fetchMovie() {
  const response = await fetch(
    "http://www.omdbapi.com/?apikey=387501be&s=movie"
  );
  if (!response.ok) throw new Error("Failed to fetch the data");
  return response.json();
}
function MovieData() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovie,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  console.log(data);
  return <div></div>;
}

export default MovieData;
