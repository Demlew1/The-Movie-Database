import chooseUs1 from "../assets/images/chooseUs1.jpg";
import chooseUs from "../assets/images/chooseUs.jpg";
function ChooseUs() {
  return (
    <div className="flex flex-col gap-12 pb-1 bg-gray-200">
      <p className="font-bold font-['Rubik'] text-gray-500 uppercase text-3xl text-center pt-10">
        why choose us?
      </p>
      <div className="font-['Montserrat'] flex flex-row gap-10 items-center  px-30 ">
        <img src={chooseUs1} className="w-50 h-50" alt="movie-collection" />
        <p className="w-90">
          Explore a vast collection of movies, from timeless classics to the
          latest blockbusters.
        </p>
      </div>
      <div className="font-['Montserrat'] flex flex-row gap-10 items-center justify-end  px-30">
        <p className="w-90">
          Find movies by genre, rating, or popularity with ease
        </p>
        <img src={chooseUs} className="w-50 h-50" alt="movie-collection" />
      </div>
    </div>
  );
}

export default ChooseUs;
