import imdb from "../assets/images/imdb.svg";
import netflix from "../assets/images/netflix.svg";
import hbo from "../assets/images/hbo.svg";
import disney from "../assets/images/disney.svg";
import marvel from "../assets/images/marvel.svg";

function Logos() {
  return (
    <div className="flex flex-row gap-12 justify-center bg-gray-50">
      <img className="w-30" src={hbo} alt="hbo-logo" />
      <img className="w-30" src={marvel} alt="marvel-logo" />
      <img className="w-30" src={netflix} alt="netflix-logo" />
      <img className="w-30" src={imdb} alt="imdb-logo" />
      <img className="w-30" src={disney} alt="disney-logo" />
    </div>
  );
}

export default Logos;
