import NavBar from "./NavBar";
import star from "../assets/images/star.svg";
import useListStore from "../store/useListStore";
function WatchList() {
  const watchList = useListStore((state) => state.watchList);
  console.log(watchList);
  return (
    <div className="bg-gray-800 h-screen p-8 overflow-y-scroll">
      <NavBar />
      <div className="bg-gray-600 p-12 rounded-md m-8 flex flex-col gap-6">
        {watchList.map((movie) => (
          <div
            key={movie.imdbID}
            className="font-['Montserrat'] bg-gray-500 p-1 px- flex flex-row gap-36 items-center rounded-sm pr-4 cursor-pointer transition delay-5 hover:bg-gray-700"
          >
            <div className="flex flex-row gap-4 items-center">
              <img className="w-48 h-24" src={movie.Poster} />
              <div>
                <p className="text-xs font-bold text-gray-100">{movie.Title}</p>
                <p className="w-40 text-[10px] text-gray-100 mt-2">
                  {movie.Genre}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-100">{movie.imdbRating}</p>
            <p className="text-xs w-20 text-gray-100">{movie.Runtime}</p>

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
