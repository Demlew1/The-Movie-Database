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
        <label className="text-xs text-gray-600 font-bold">Comment</label>
        <textarea
          placeholder="Add your comment"
          type="text"
          className="border-1 p-2 text-xs border-gray-400 w-100 focus:outline-none"
        />
      </div>
    </form>
  );
}

export default SignUpForm;
