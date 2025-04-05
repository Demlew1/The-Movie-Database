import playLogo from "../../public/images/play-logo.svg";
import { Link } from "react-router-dom";
import useListStore from "../store/useListStore";
import UserInfo from "./UserInfo";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
function NavBar() {
  const watchList = useListStore((state) => state.watchList);
  const [userOpen, setUserOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-row justify-between items-center px-6 pt-6 sm:px-8 sm:py-6 ">
      <div className=" flex flex-row items-center gap-1 cursor-pointer">
        <img className="size-8" src={playLogo} alt="play Logo" />
        <p className="font-['Barriecito'] uppercase text-white">demilx</p>
      </div>
      <IoMdMenu
        onClick={() => setMenuOpen(!menuOpen)}
        className="size-6 text-white md:hidden cursor-pointer"
      />
      {menuOpen && (
        <div
          className={`font-['Montserrat'] gap-2 absolute top-14 rounded-sm right-6 z-10 md:hidden  bg-gray-700 p-2 w-40  flex flex-col text-gray-300 text-xs md:gap-8 `}
        >
          <Link
            to="/Home"
            className="cursor-pointer bg-gray-600 p-1 text-center hover:bg-indigo-800 text-[10px] rounded-sm border-gray-100  transition delay-25 "
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="cursor-pointer bg-gray-600 p-1 text-center hover:bg-indigo-800 text-[10px] rounded-sm  transition delay-25 "
          >
            Movies
          </Link>
          <Link
            to="/watchlist"
            className="cursor-pointer relative bg-gray-600 p-1 text-center hover:bg-indigo-800 text-[10px] rounded-sm  transition delay-25"
          >
            WatchList
          </Link>
        </div>
      )}
      <div
        className={`font-['Montserrat'] gap-2 rounded-sm   hidden  text-gray-300 text-xs md:flex md:flex-row md:gap-8 md:bg-none`}
      >
        <Link
          to="/Home"
          className="cursor-pointer  text-[10px] rounded-sm border-gray-100 hover:text-gray-500 transition delay-25 "
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="cursor-pointer  text-[10px] rounded-sm hover:text-gray-500 transition delay-25 "
        >
          Movies
        </Link>
        <Link
          to="/watchlist"
          className="cursor-pointer relative  text-[10px] rounded-sm hover:text-gray-500 transition delay-25"
        >
          WatchList
          {watchList.length > 0 && (
            <p className="absolute bottom-2 left-13  text-gray-100 text-xs bg-indigo-800  font-mono size-4 flex flex-row justify-center items-center rounded-full ">
              {watchList.length}
            </p>
          )}
        </Link>
      </div>
      <div
        onClick={() => setUserOpen(!userOpen)}
        className="bg-gray-500 size-8 rounded-full cursor-pointer hidden md:flex md:flex-row md:justify-center md:items-center"
      >
        <FaRegUser className="size-4 text-gray-200" />
        {userOpen && <UserInfo />}
      </div>
    </div>
  );
}

export default NavBar;
