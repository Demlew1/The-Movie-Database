import NavBar from "../../NavBar";
import { Link } from "react-router";
function Front() {
  return (
    <div className="bg-[url(/images/Home-background.jpg)] bg-cover w-full h-screen ">
      <div>
        <NavBar />
      </div>
      <div className=" flex flex-col justify-center items-center  bg-black/40">
        <p className="font-['Rubik'] pt-30 text-white text-2xl sm:text-[40px] lg:text-[50px] font-bold uppercase ">
          welcome to demlix
        </p>
        <p className="font-['Barriecito'] text-white text-sm sm:text-lg uppercase   ">
          your ultimate movie destination
        </p>
        <Link
          className="bg-indigo-900 font-mono rounded-md text-gray-100 p-2 mt-4 text-xs cursor-pointer hover:bg-indigo-700"
          to="/movies"
        >
          Browse Movies
        </Link>
      </div>
    </div>
  );
}

export default Front;
