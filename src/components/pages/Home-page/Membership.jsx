import { IoCheckmark } from "react-icons/io5";
import { RiFlashlightFill } from "react-icons/ri";
import { FaCrown } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
const standard = [
  { message: "Stream movies in high-definition (HD) quality", id: 1 },
  { message: "Access to our vast library of movies and TV shows", id: 2 },
  { message: "Watch movies on up to two devices simultaneously", id: 3 },
  { message: "Cancel anytime", id: 4 },
  { message: "Ads-Free", id: 5 },
];
const premium = [
  { message: "Stream movies in 4K Ultra HD quality", id: 1 },
  { message: "Exclusive access to premium content and early release", id: 2 },
  { message: "Watch movies on up to four devices simultaneously", id: 3 },
  { message: "Cancel anytime", id: 4 },
  { message: "Ads-Free", id: 5 },
];

function Membership() {
  function handlePlan() {
    alert("Your decision is accepted");
  }
  return (
    <div className="bg-gray-100 mt-10 pt-4 text-center">
      <div className="font-['Ubuntu'] mb-5">
        <p className="font-bold text-xl text-center">Demlix Membership</p>
        <p className="font-['Rubik'] pt-2 font-light text-xs mx-10">
          Choose the perfect subscription for your streaming needs
        </p>
      </div>
      <div className="flex flex-col gap-12 items-center md:gap-12 lg:gap-18 sm:flex-row sm:gap-8 sm:justify-center pb-12">
        <div className="bg-white font-['Montserrat'] text-xs flex flex-col gap-2 justify-center w-70 md:w-80 my-4 p-4 shadow-xs">
          <div className=" flex flex-row gap-2">
            <RiFlashlightFill className="size-5" />
            <p className="self-center">Standard</p>
          </div>
          <div className="text-lg font-bold self-start flex flex-row gap-1 items-center">
            <FaDollarSign />
            <p className="text-xs font-light">
              <span className="font-bold text-lg">14.99</span>/ month
            </p>
          </div>
          <button
            onClick={handlePlan}
            className="border-1 w-60 md:w-70 md:p-2 cursor-pointer hover:bg-gray-700 hover:text-white p-1 text-[10px]"
          >
            Select this plan
          </button>
          <div className="flex flex-col gap-2 md:gap-3 md:pt-2">
            {standard.map((message) => (
              <div
                className="flex flex-row items-center gap-2"
                key={message.id}
              >
                <IoCheckmark className="size-3 lg:size-4" />
                <p className="text-[8px] md:text-[10px]">{message.message}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white font-['Montserrat'] text-xs flex flex-col gap-2 justify-center p-4 shadow-xs border-1 w-70 md:w-82 lg:w-83 border-gray-600">
          <div className=" flex flex-row gap-2">
            <FaCrown className="size-5" />
            <p className="self-center">Premium</p>
          </div>
          <div className="text-lg font-bold self-start flex flex-row gap-1 items-center">
            <FaDollarSign />
            <p className="text-xs font-light">
              <span className="font-bold text-lg">19.99</span>/ month
            </p>
          </div>
          <button
            onClick={handlePlan}
            className="border-1 w-60 md:w-70 lg:w-74 md:p-2 cursor-pointer hover:bg-white hover:text-black bg-gray-700 text-white p-1 text-[10px]"
          >
            Select this plan
          </button>
          <div className="flex flex-col gap-2 md:gap-3 md:pt-2">
            {premium.map((message) => (
              <div
                className="flex flex-row items-center gap-2"
                key={message.id}
              >
                <IoCheckmark className="size-3 lg:size-4" />
                <p className="text-[8px] md:text-[10px]">{message.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
