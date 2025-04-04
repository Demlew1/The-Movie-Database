import imdb from "../../../../public/images/imdb.svg";
import netflix from "../../../../public/images/netflix.svg";
import hbo from "../../../../public/images/hbo.svg";
import disney from "../../../../public/images/disney.svg";
import marvel from "../../../../public/images/marvel.svg";

function Logos() {
  return (
    <div className="flex flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 pt-3 justify-center">
      <img className="w-8 sm:w-12 md:w-16 lg:w-24" src={hbo} alt="hbo-logo" />
      <img
        className="w-8 sm:w-12 md:w-16 lg:w-24"
        src={marvel}
        alt="marvel-logo"
      />
      <img
        className="w-8 sm:w-12 md:w-16 lg:w-24"
        src={netflix}
        alt="netflix-logo"
      />
      <img className="w-8 sm:w-12 md:w-16 lg:w-24" src={imdb} alt="imdb-logo" />
      <img
        className="w-8 sm:w-12 md:w-16 lg:w-24"
        src={disney}
        alt="disney-logo"
      />
    </div>
  );
}

export default Logos;
