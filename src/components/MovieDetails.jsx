import NavBar from "./NavBar";
import MovieData from "./MovieData";
import useSearchStore from "../store/useSearchStore";
function MovieDetails() {
  return (
    <div className="bg-gray-800 ">
      <div className="px-8 pt-8 ">
        <NavBar />
      </div>
      <div className="flex flex-row justify-between px-8 py-4">
        <div className="flex flex-row gap-2 items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            />
          </svg>
          <select
            className="font-['Rubik'] text-gray-600 focus:outline-none bg-gray-200 border-1 w-40 p-1 text-xs cursor-pointer"
            placeholder="Filter by..."
          >
            <option value="" disabled>
              Filter by...
            </option>
            <option value="title">Title</option>
            <option>Genre</option>
            <option>Year</option>
          </select>
        </div>
        <div className="flex flex-row items-center ">
          <input
            type="text"
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
