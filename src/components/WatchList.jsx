import NavBar from "./NavBar";
import useListStore from "../store/useListStore";
import Rating from "./Rating";
function WatchList() {
  const watchList = useListStore((state) => state.watchList);
  const removeFromList = useListStore((state) => state.removeFromList);
  const updateRating = useListStore((state) => state.updateRating);

  console.log(watchList);
  return (
    <div className="bg-gray-800 h-screen p-8 overflow-y-scroll">
      <NavBar />
      {watchList.length > 0 ? (
        <div className="bg-gray-600 p-12 rounded-md m-8 flex flex-col gap-6">
          {watchList.map((movie) => (
            <div
              key={movie.imdbID}
              className="font-['Montserrat'] bg-gray-500 p-1 px- flex flex-row gap-36 items-center rounded-sm pr-4 cursor-pointer transition delay-5 hover:bg-gray-700"
            >
              <div className="flex flex-row gap-4 items-center">
                <img className="w-18 h-20" src={movie.Poster} />
                <div>
                  <p className="text-xs font-bold text-gray-100">
                    {movie.Title}
                  </p>
                  <p className="w-40 text-[10px] text-gray-100 mt-2">
                    {movie.Genre}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-100">{movie.imdbRating}</p>
              <p className="text-xs w-20 text-gray-100">{movie.Runtime}</p>
              <div className="w-24">
                <Rating
                  ratingGiven={movie.userRating}
                  onRatingChange={(rate) => updateRating(movie.imdbID, rate)}
                />
              </div>
              <button
                onClick={() => removeFromList(movie.imdbID)}
                className="font-bold text-[10px] text-gray-300 rounded-md bg-gray-800 p-1 hover:bg-gray-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="font-mono text-amber-200 mt-40 ml-16 flex flex-row justify-center">
          Your watchlist is empty
        </p>
      )}
    </div>
  );
}

export default WatchList;
