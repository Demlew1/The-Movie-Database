import NavBar from "../../NavBar";

function Front() {
  return (
    <div className="bg-[url(src/assets/images/Home-background.jpg)] bg-cover w-full h-screen ">
      <div>
        <NavBar />
      </div>
      <div className=" flex flex-col justify-center items-center bg-black/40">
        <p className="font-['Rubik'] pt-30 text-white text-2xl sm:text-[40px] lg:text-[50px]  font-bold uppercase ">
          welcome to demlix
        </p>
        <p className="font-['Barriecito'] text-white text-sm sm:text-lg uppercase   ">
          your ultimate movie destination
        </p>
      </div>
    </div>
  );
}

export default Front;
