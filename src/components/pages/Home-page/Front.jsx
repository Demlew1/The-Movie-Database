import NavBar from "../../NavBar";

function Front() {
  return (
    <div className="bg-[url(src/assets/images/Home-background.jpg)] bg-cover h-screen p-6">
      <div>
        <NavBar />
      </div>
      <div>
        <p className="font-['Rubik'] pt-14 pl-8 text-white text-[70px] leading-20 w-130 font-bold uppercase">
          welcome to demlix
        </p>
        <p className="font-['Barriecito'] text-white text-3xl uppercase pt-4 pl-8">
          your ultimate movie destination
        </p>
      </div>
    </div>
  );
}

export default Front;
