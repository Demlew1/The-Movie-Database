import NavBar from "../../NavBar";
import MovieData from "./MovieData";
import useSearchStore from "../../../store/useSearchStore";
function MovieDetails() {
  const { searchText, setSearchText } = useSearchStore();
  return (
    <div className="bg-gray-800 relative">
      <div className="pb-3 ">
        <NavBar />
      </div>
      <div className="flex flex-row items-center justify-center">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          className="bg-gray-100 border-1 font-['Rubik'] text-[10px] p-1 sm:absolute sm:top-7 sm:right-55 md:top-16 md:right-20 lg:top-7 lg:right-25 w-40 focus:outline-none mb-4 text-gray-500"
        />
      </div>
      <MovieData />
    </div>
  );
}
export default MovieDetails;
