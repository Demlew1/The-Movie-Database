import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import supabase from "../../../store/auth";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
}).required();
function SignIn() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(data) {
    setIsLoading(true);
    setAuthError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      if (error) throw error;
      navigate("/Home");
      reset();
    } catch (error) {
      setAuthError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="bg-gray-100 h-screen font-['Ubuntu'] flex flex-col pt-10 gap-4">
      <div className="text-center ">
        <p className="font-['Ubuntu'] font-bold text-lg sm:text-xl md:text-2xl lg:text-[30px] xl:text-[40px]">
          Unlock a world of endless entertainment
        </p>
        <p className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-lg">
          Login to Discover ,Stream, and Enjoy!
        </p>
      </div>
      <div className="bg-white self-center p-4 w-75 sm:w-90 flex flex-col md:w-100 xl:w-120 ">
        <p className="font-bold text-lg text-center pb-6 sm:text-xl md:text-2xl ">
          Sign in
        </p>
        {authError && (
          <div className="mb-4 p-2 text-center bg-red-100 text-red-700 text-sm rounded">
            {authError}
          </div>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 "
        >
          <div>
            <div className="flex flex-col bg-gray-100 gap-1 p-1 pr-2">
              <label className="font-bold text-gray-700 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
                Email
              </label>
              <input
                {...register("email")}
                className="font-['montserrat'] text-[10px]  focus:outline-none"
                type="text"
                name="email"
                autoComplete="current-email"
                placeholder="example.email@gmail.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <div className="flex flex-col gap-1 bg-gray-100 p-1 pr-2 ">
              <label className="font-bold text-gray-700 text-xs sm:text-sm md:text-sm ">
                Password
              </label>
              <div className="flex flex-row justify-between items-end">
                <input
                  {...register("password")}
                  className="font-['montserrat'] text-[10px] w-60 focus:outline-none "
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter atleast 8+ characters"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoMdEye className="cursor-pointer size-3" />
                  ) : (
                    <IoEyeOff className="cursor-pointer size-3" />
                  )}
                </button>
              </div>
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex flex-row gap-2 items-center">
            <input className="cursor-pointer sm:size-3" type="checkbox" />
            <p className="font-['montserrat'] text-[10px] ">Remember me</p>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="text-center bg-gray-600 text-gray-100 text-xs p-1 sm:p-2 cursor-pointer font-bold hover:bg-gray-500 transition delay-10  "
          >
            {isLoading ? "Signing in" : "Sign in"}
          </button>
          <div className="text-[10px] sm:text-xs flex flex-row gap-1 justify-center">
            <p>New to Demlix?</p>
            <Link to="/signup" className="underline cursor-pointer">
              Signup now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
