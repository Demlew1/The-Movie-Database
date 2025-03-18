function Membership() {
  return (
    <div className="bg-gray-100 pt-4 text-center">
      <div className="font-['Ubuntu']">
        <p className="font-bold text-3xl text-center">Demlix Membership</p>
        <p className="font-['Rubik'] pt-4">
          Choose the perfect subscription for your streaming needs
        </p>
      </div>
      <div className="bg-white font-['Montserrat'] text-xs">
        <div className="flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </svg>
          <p className="">Standard</p>
        </div>
        <p className="text-xl font-bold ">
          $ 14.99 <span className="text-xs font-light">/ month</span>
        </p>
        <button className="border-1 w-60 p-1 text-xs">Select this plan</button>
      </div>
    </div>
  );
}

export default Membership;
