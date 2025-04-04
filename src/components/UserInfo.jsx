import { fetchUser } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../store/auth";
function UserInfo() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  async function logOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/");
      console.log(errors);
    } catch (error) {
      setErrors(error.message);
    }
  }
  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    staleTime: 100000,
  });
  if (isLoading)
    return (
      <p className="text-center text-white font-mono h-screen">Loading...</p>
    );
  if (isError)
    return (
      <p className="text-red-500 text-center font-mono h-screen">
        {error.message}
      </p>
    );
  console.log("userdata", userData);
  return (
    <div>
      <span className="z-10 text-white font-['Montserrat'] bg-gray-900 flex flex-col items-center gap-2 p-3 rounded-md text-xs w-55 absolute top-15 right-2 ">
        <p className="">{userData.user.user_metadata.fullName}</p>
        <p>{userData.user.user_metadata.email}</p>
        <button
          onClick={logOut}
          className="transition delay-10 bg-indigo-900 font-bold w-50 p-1 rounded-md hover:bg-indigo-700 text-gray-200 cursor-pointer "
        >
          Logout
        </button>
      </span>
    </div>
  );
}

export default UserInfo;
