import supabase from "../../../store/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import useListStore from "../../../store/useListStore";
const validationSchema = Yup.object({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  phone: Yup.string().required("Phone Number is required"),
  location: Yup.string().required("Your Location is required"),
}).required();
const signUpForm = [
  {
    label: "Full Name",
    placeHolder: "Your Full Name",
    type: "text",
    name: "fullName",
  },
  {
    label: "Email",
    placeHolder: "example@gmail.com",
    type: "email",
    name: "email",
  },
  {
    label: "Phone number",
    placeHolder: "Your Phone Number",
    type: "number",
    name: "phone",
  },
  {
    label: "Password",
    placeHolder: "Enter atleast 8+ characters",
    type: "password",
    name: "password",
  },
  {
    label: "Location",
    placeHolder: "-Select Your Country-",
    type: "text",
    name: "location",
  },
];
function SignUpForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      phone: "",
      location: "",
    },
  });
  async function submit(data) {
    try {
      localStorage.removeItem("watchlist-storage");
      useListStore.setState({ watchList: [] });
      setLoading(true);
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            fullName: data.fullName,
            phone: data.phone,
            location: data.location,
            about: data.about,
          },
        },
      });
      if (error) throw error;
      navigate("/Home");
      reset();
      alert("Sign-up successful!");
    } catch (error) {
      alert(`Sign-up failed:${error.message}`);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-2">
      {signUpForm.map((data) => (
        <div
          className="font-['Montserrat'] flex flex-col gap-1"
          key={data.label}
        >
          <label className="text-[10px] text-gray-600 font-bold md:text-xs">
            {data.label}
          </label>
          <input
            {...register(data.name)}
            className="text-[8px] md:text-[10px] md:w-90 lg:w-100 p-2 focus:outline-none border-1 w-70 border-gray-400 "
            type={data.type}
            placeholder={data.placeHolder}
          />
          {errors[data.name] && (
            <span className="text-[10px] text-red-500">
              {errors[data.name].message}
            </span>
          )}
        </div>
      ))}
      <div className=" font-['Montserrat'] flex flex-col gap-1">
        <label className="text-[10px] text-gray-600 font-bold md:text-xs">
          About me
        </label>
        <textarea
          {...register("about")}
          placeholder="Tell something about yourself"
          type="text"
          className="border-1 p-2 text-[8px] md:text-[10px] md:w-90 lg:w-100 border-gray-400 w-70 focus:outline-none"
        />
      </div>
      <div className="self-end flex flex-row gap-8 items-center mt-2">
        <Link
          to="/"
          className="font-['montserrat'] text-[10px] text-gray-700 cursor-pointer hover:text-gray-900 transition delay-25"
        >
          Cancel
        </Link>
        <button
          disabled={loading}
          className="text-center bg-gray-600 rounded-sm text-gray-100 text-[10px] self-end w-14 h-6 md:w-18 md:h-8 md:text-xs cursor-pointer font-bold hover:bg-gray-500 transition delay-10 "
          type="submit"
        >
          {loading ? "Signing up" : "Sign up"}
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
