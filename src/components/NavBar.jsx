import playLogo from "../assets/images/play-logo.svg";
function NavBar() {
  return (
    <div>
      <div className=" flex flex-row items-center gap-1">
        <img className="size-12" src={playLogo} alt="play Logo" />
        <p className="font-['Barriecito'] uppercase text-white">demilx</p>
      </div>
    </div>
  );
}

export default NavBar;
