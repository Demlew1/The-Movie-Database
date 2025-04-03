import chooseUs1 from "../../../../public/images/chooseUs1.jpg";
import chooseUs from "../../../../public/images/chooseUs.jpg";
function ChooseUs() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 pb-1 ">
      <p className="font-bold font-['Rubik'] text-gray-500 uppercase text-sm text-center md:text-xl lg:text-2xl pt-5">
        why choose us?
      </p>
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:items-start lg:flex-col lg:mx-30">
        <div className="font-['Montserrat'] flex flex-col gap-6 lg:flex-row items-center ">
          <img src={chooseUs1} className="w-40 h-50" alt="movie-collection" />
          <p className="text-xs text-center w-60 lg:w-80 px-2">
            Explore a vast collection of movies, from timeless classics to the
            latest blockbusters.
          </p>
        </div>
        <div className="font-['Montserrat'] flex flex-col gap-6 lg:flex-row lg:self-end items-center ">
          <p className="text-xs text-center w-60 lg:w-70 px-2 order-2 lg:-order-1">
            Find movies by genre, rating, or popularity with ease.
          </p>
          <img src={chooseUs} className="w-40 h-50" alt="movie-collection" />
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
