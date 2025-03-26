import playLogo from "../assets/images/play-logo.svg";
import { Link } from "react-router-dom";
import useListStore from "../store/useListStore";
function NavBar() {
  const watchList = useListStore((state) => state.watchList);
  return (
    <div className="flex flex-row justify-between items-center px-8 relative">
      <div className=" flex flex-row items-center gap-1 cursor-pointer">
        <img className="size-12" src={playLogo} alt="play Logo" />
        <p className="font-['Barriecito'] uppercase text-white">demilx</p>
      </div>
      <div className="font-['Montserrat'] flex flex-row gap-4 text-gray-300 text-xs">
        <Link
          to="/Home"
          className="cursor-pointer border-gray-100 hover:text-gray-500 transition delay-25 "
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="cursor-pointer hover:text-gray-500 transition delay-25 "
        >
          Movies
        </Link>
        <Link
          to="/watchlist"
          className="cursor-pointer  hover:text-gray-500 transition delay-25"
        >
          WatchList
        </Link>
      </div>
      <div className="bg-gray-500 size-10 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </div>
      <p className="absolute top-2 right-117 text-gray-100 text-xs bg-indigo-800 font-mono size-4 flex flex-row justify-center items-center rounded-full ">
        {watchList.length}
      </p>
    </div>
  );
}

export default NavBar;
