const apiKey = "387501be";
export async function getMovie() {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=movie`
  );
  if (!response.ok) throw new Error("Failed to fetch the data");
  return response.json();
}
export async function fetchMovieDetails(id) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`
  );
  if (!response.ok) throw new Error("Error fetching the movie data");
  return response.json();
}
