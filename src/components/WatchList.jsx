import NavBar from "./NavBar";
import useListStore from "../store/useListStore";
import Rating from "./Rating";
function WatchList() {
  const watchList = useListStore((state) => state.watchList);
  const removeFromList = useListStore((state) => state.removeFromList);
  const updateRating = useListStore((state) => state.updateRating);
  return (
    <div className="bg-gray-800 h-screen  overflow-y-scroll">
      <NavBar />
      {watchList.length > 0 ? (
        <div className="bg-gray-600 p-12 rounded-md m-8 flex flex-col gap-6">
          {watchList.map((movie) => (
            <div
              key={movie.imdbID}
              className="font-['Montserrat'] bg-gray-500    p-2 px- flex flex-col sm:flex-row sm:justify-between sm:gap-8 gap-2 rounded-sm cursor-pointer transition delay-5 hover:bg-gray-700"
            >
              <div className="flex flex-col gap-2 sm:flex-row items-center">
                <img className="w-18 h-20" src={movie.Poster} />
                <div>
                  <p className="text-xs text-center sm:text-start  font-bold text-gray-100">
                    {movie.Title}
                  </p>
                  <p className="w-40 text-[8px] sm:text-start text-center text-gray-100 mt-2">
                    {movie.Genre}
                  </p>
                </div>
              </div>
              <p className="text-[10px] text-gray-100 sm:self-center text-center">
                {movie.imdbRating}
              </p>
              <p className="text-[10px] self-center text-center text-gray-100">
                {movie.Runtime}
              </p>
              <div className=" sm:self-center justify-self-center">
                <Rating
                  ratingGiven={movie.userRating}
                  onRatingChange={(rate) => updateRating(movie.imdbID, rate)}
                />
              </div>
              <div className="flex flex-row justify-center">
                <button
                  onClick={() => removeFromList(movie.imdbID)}
                  className="font-bold text-[8px] justify-self-center w-14 h-6 text-gray-300  sm:self-center rounded-md bg-gray-800 p-1 hover:bg-gray-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="font-mono text-amber-200 ml-14 mt-40 text-center text-xs flex flex-row justify-center">
          Your watchlist is empty
        </p>
      )}
    </div>
  );
}

export default WatchList;
