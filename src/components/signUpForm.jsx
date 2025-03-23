import { Link } from "react-router-dom";
const signUpForm = [
  {
    label: "Full Name",
    placeHolder: "Your Full Name",
    type: "text",
  },
  {
    label: "Email",
    placeHolder: "example@gmail.com",
    type: "email",
  },
  {
    label: "Phone number",
    placeHolder: "Your Phone Number",
    type: "number",
  },
  {
    label: "Password",
    placeHolder: "Enter atleast 8+ characters",
    type: "password",
  },
  {
    label: "Location",
    placeHolder: "-Select Your Country-",
    type: "text",
  },
];
function SignUpForm() {
  return (
    <form className="flex flex-col gap-2">
      {signUpForm.map((data) => (
        <div
          className="font-['Montserrat'] flex flex-col gap-1"
          key={data.label}
        >
          <label className="text-xs text-gray-600 font-bold">
            {data.label}
          </label>
          <input
            className="text-[10px] p-2 focus:outline-none border-1 w-100 border-gray-400 "
            type={data.type}
            placeholder={data.placeHolder}
          />
        </div>
      ))}
      <div className=" font-['Montserrat'] flex flex-col gap-1">
        <label className="text-xs text-gray-600 font-bold">About me</label>
        <textarea
          placeholder="Tell something about yourself"
          type="text"
          className="border-1 p-2 text-xs border-gray-400 w-100 focus:outline-none"
        />
      </div>
      <div className="self-end flex flex-row gap-8 items-center mt-2">
        <button className="font-['montserrat'] text-xs text-gray-700 cursor-pointer hover:text-gray-900 transition delay-25">
          Cancel
        </button>
        <Link
          to="/Home"
          className="text-center bg-gray-600 text-gray-100 text-xs w-24 h-8 self-end p-2 cursor-pointer font-bold hover:bg-gray-500 transition delay-10 "
          type="submit"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
}

export default SignUpForm;
