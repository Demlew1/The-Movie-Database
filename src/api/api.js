const apiKey = "387501be";
export async function getMovie(page = 1) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=movie&page=${page}`
  );
  if (!response.ok) throw new Error("Failed to fetch the data");
  return response.json();
}
export async function getMovieDetails(id) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`
  );
  if (!response.ok) throw new Error("Error fetching the movie data");
  return response.json();
}
