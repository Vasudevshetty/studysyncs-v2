/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/Home/InputField";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Login Successful", {
      position: "top-right",
    });
  };

  const handleGoogleLogin = () => {
    toast.info("Login with Google clicked", {
      position: "top-right",
    });
  };

  const handleGitHubLogin = () => {
    toast.info("Login with GitHub clicked", {
      position: "top-right",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8  ">
      <img src="/logo.png" className="h-10 sm:h-24" />
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
      >
        {/* Email */}
        <InputField
          id="email"
          label="Email"
          type="email"
          register={register}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: "Enter a valid email address",
            },
          }}
          error={errors.email}
          disabled={isDisabled}
        />

        {/* Password */}
        <InputField
          id="password"
          label="Password"
          type="password"
          register={register}
          validation={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          }}
          error={errors.password}
          disabled={isDisabled}
        />

        <Link to="/app/dashboard">
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition duration-200 mt-4 ${
              isDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isDisabled}
          >
            Login
          </button>
        </Link>
        <p className="text-center pt-2 text-xs font-bold text-blue-950">OR</p>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-red-700 text-white font-bold py-2 rounded-md hover:bg-red-600 transition duration-200 mt-4 flex items-center justify-center"
        >
          <FcGoogle className="mr-2" size={24} />
          Login with Google
        </button>
        <button
          type="button"
          onClick={handleGitHubLogin}
          className="w-full bg-gray-800 text-white font-bold py-2 rounded-md hover:bg-gray-900 transition duration-200 mt-4 flex items-center justify-center"
        >
          <FaGithub className="mr-2" size={24} />
          Login with GitHub
        </button>

        <p className="mt-4 text-xs font-medium ">
          Don't have an account?
          <Link
            to="/Signup"
            className="text-blue-800 font-semibold hover:underline px-2"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
