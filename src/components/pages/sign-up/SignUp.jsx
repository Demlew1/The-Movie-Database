import SignUpForm from "./SignUpForm";
function SignUp() {
  return (
    <div className="bg-gray-200 flex flex-row justify-center items-center h-screen">
      <div className="bg-gray-50 flex flex-row gap-8 items-start p-4 rounded-sm">
        <div className="bg-gray-600 text-gray-300 items-center justify-center  size-12 sm:size-24 md:size-32 rounded-full text-center text-xl hidden sm:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 sm:size-12 md:size:16 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
