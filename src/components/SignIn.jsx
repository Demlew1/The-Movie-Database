import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div className="bg-gray-100 h-screen font-['Ubuntu'] flex flex-col gap-8">
      <div className="text-center pt-12 sm:pt-8  ">
        <p className="font-['Ubuntu'] font-bold text-2xl sm:text-lg md:text-2xl">
          Unlock a world of endless entertainment
        </p>
        <p className="text-sm sm:text-xs md:text-sm">
          Login to Discover ,Stream, and Enjoy!
        </p>
      </div>
      <div className="bg-white self-center p-4 w-100 flex flex-col sm:w-90 md:w-100 ">
        <p className="font-bold text-2xl text-center pb-6 sm:text-xl sm:pb-4 md:pb-6 md:text-2xl">
          Sign in
        </p>
        <form className="flex flex-col gap-4 sm:gap-3 md:gap-4">
          <div className="flex flex-col bg-gray-100 gap-1 p-1 pr-2">
            <label className="font-bold text-gray-700 text-sm sm:text-[12px] md:text-sm">
              Email
            </label>
            <input
              className="font-['montserrat'] text-xs focus:outline-none sm:text-[10px] md:text-xs"
              type="text"
              placeholder="example.email@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-1 bg-gray-100 p-1 pr-2 ">
            <label className="font-bold text-gray-700 text-sm sm:text-[12px] md:text-sm">
              Password
            </label>
            <div className="flex flex-row justify-between items-end">
              <input
                className="font-['montserrat'] text-xs w-60 focus:outline-none sm:text-[10px] md:text-xs"
                type="text"
                placeholder="Enter atleast 8+ characters"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-3 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input className="cursor-pointer sm:size-3" type="checkbox" />
            <p className="font-['montserrat'] text-xs sm:text-[12px]">
              Remember me
            </p>
          </div>
          <Link
            to="/Home"
            type="submit"
            className="text-center bg-gray-600 text-gray-100 text-xs p-2 cursor-pointer font-bold hover:bg-gray-500 transition delay-10 sm:p-1 md:p-2"
          >
            Sign in
          </Link>
          <div className="text-xs flex flex-row gap-1 justify-center pt-2">
            <p>New to Demlix?</p>
            <Link to="/signup" className="underline cursor-pointer">
              Signup now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
