import playLogo from "../assets/images/play-logo.svg";
import { Link } from "react-router-dom";
import useListStore from "../store/useListStore";
import UserInfo from "./UserInfo";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
function NavBar() {
  const watchList = useListStore((state) => state.watchList);
  const [userOpen, setUserOpen] = useState(false);
  return (
    <div className="flex flex-row justify-between items-center px-6 pt-6 sm:px-8 sm:py-6 ">
      <div className=" flex flex-row items-center gap-1 cursor-pointer">
        <img className="size-8" src={playLogo} alt="play Logo" />
        <p className="font-['Barriecito'] uppercase text-white">demilx</p>
      </div>
      <IoMdMenu className="size-6 text-white md:hidden" />
      <div className="font-['Montserrat']  text-gray-300 text-xs hidden md:flex flex-row gap-8 ">
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
          className="cursor-pointer relative hover:text-gray-500 transition delay-25"
        >
          WatchList
          {watchList.length > 0 && (
            <p className="absolute bottom-2 left-15  text-gray-100 text-xs bg-indigo-800 font-mono size-4 flex flex-row justify-center items-center rounded-full ">
              {watchList.length}
            </p>
          )}
        </Link>
      </div>
      <button
        onClick={() => setUserOpen(!userOpen)}
        className="bg-gray-500 size-8 rounded-full cursor-pointer hidden md:flex md:flex-row md:justify-center md:items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        {userOpen && <UserInfo />}
      </button>
    </div>
  );
}

export default NavBar;
