import NavBar from "../../NavBar";
import MovieData from "./MovieData";
import useSearchStore from "../../../store/useSearchStore";
function MovieDetails() {
  const { searchText, setSearchText } = useSearchStore();
  return (
    <div className="bg-gray-800 relative">
      <div className="px-8 pt-8 ">
        <NavBar />
      </div>
      <div className="flex flex-row justify-between px-8 py-4">
        <div className="flex flex-row items-center absolute top-11 right-50">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
            className="bg-gray-100 border-1 font-['Rubik'] text-xs p-1 w-40 focus:outline-none text-gray-500"
          />
          <button className="bg-gray-700 p-1.5 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <MovieData />
    </div>
  );
}
export default MovieDetails;
