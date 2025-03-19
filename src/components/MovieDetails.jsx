import NavBar from "./NavBar";
import MovieData from "./MovieData";
function MovieDetails() {
  return (
    <div className="bg-gray-800 h-screen">
      <div className="px-8 pt-8   ">
        <NavBar />
      </div>
      {/* <div class="inline-flex items-center cursor-pointer relative top-[-32px] left-270 ">
        <input type="checkbox" value="" class="sr-only peer  " />
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-gray-500  "></div>
      </div> */}
      <div className="flex flex-row justify-between px-8 py-4">
        <div className="flex flex-row gap-2 items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-5 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            />
          </svg>
          <select
            className="font-['Rubik'] text-gray-600 focus:outline-none bg-gray-200 border-1 w-40 p-1 text-xs cursor-pointer"
            placeholder="Filter by..."
          >
            <option value="" disabled selected>
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
              stroke-width="1.5"
              stroke="currentColor"
              className="size-4 text-gray-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
