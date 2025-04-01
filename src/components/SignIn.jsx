import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import supabase from "../store/auth";
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
    <div className="bg-gray-100 h-screen font-['Ubuntu'] flex flex-col gap-8">
      <div className="text-center pt-12 sm:pt-8  ">
        <p className="font-['Ubuntu'] font-bold text-2xl sm:text-lg md:text-2xl">
          Unlock a world of endless entertainment
        </p>
        <p className="text-sm sm:text-xs md:text-sm">
          Login to Discover ,Stream, and Enjoy!
        </p>
      </div>
      <div className="bg-white self-center p-4 w-100 flex flex-col sm:w-90 md:w-100 ">
        <p className="font-bold text-2xl text-center pb-6 sm:text-xl sm:pb-4 md:pb-6 md:text-2xl">
          Sign in
        </p>
        {authError && (
          <div className="mb-4 p-2 text-center bg-red-100 text-red-700 text-sm rounded">
            {authError}{" "}
          </div>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 sm:gap-3 md:gap-4"
        >
          <div>
            <div className="flex flex-col bg-gray-100 gap-1 p-1 pr-2">
              <label className="font-bold text-gray-700 text-sm sm:text-[12px] md:text-sm">
                Email
              </label>
              <input
                {...register("email")}
                className="font-['montserrat'] text-xs focus:outline-none sm:text-[10px] md:text-xs"
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
              <label className="font-bold text-gray-700 text-sm sm:text-[12px] md:text-sm">
                Password
              </label>
              <div className="flex flex-row justify-between items-end">
                <input
                  {...register("password")}
                  className="font-['montserrat'] text-xs w-60 focus:outline-none sm:text-[10px] md:text-xs"
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
                    <IoMdEye className="cursor-pointer" />
                  ) : (
                    <IoEyeOff className="cursor-pointer" />
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
            <p className="font-['montserrat'] text-xs sm:text-[12px]">
              Remember me
            </p>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="text-center bg-gray-600 text-gray-100 text-xs p-2 cursor-pointer font-bold hover:bg-gray-500 transition delay-10 sm:p-1 md:p-2"
          >
            {isLoading ? "Signing in" : "Sign in"}
          </button>
          <div className="text-xs flex flex-row gap-1 justify-center pt-2">
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
