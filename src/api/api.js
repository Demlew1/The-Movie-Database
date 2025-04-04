import supabase from "../store/auth";
export async function getMovie(page = 1) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=387501be&s=movie&page=${page}`
  );
  if (!response.ok) throw new Error("Failed to fetch the data");
  return response.json();
}
export async function getMovieDetails(id) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=387501be&i=${id}&plot=full`
  );
  if (!response.ok) throw new Error("Error fetching the movie data");
  return response.json();
}
export async function searchMovies(query) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=387501be&s=${query}`
  );
  if (!response.ok) throw new Error("Failed to fetch search results");
  return response.json();
}
export async function fetchUser() {
  const { data: response, error } = await supabase.auth.getUser();
  if (error) throw new Error("error in fetching the user");
  return response;
}
