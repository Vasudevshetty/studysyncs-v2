/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import UtilLayout from "./UtilLayout";
import HoverCard from "@/components/Home/HoverCard";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/api/auth"; // Adjust the import as necessary
import { useEffect } from "react";
import { useAuth } from "@/context/authContext";
import toast from "react-hot-toast";

function Signup() {
  const { setUser } = useAuth();
  const location = useLocation();
  const { email, usn } = location.state || {};
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  // Check if email and usn are defined; if not, navigate back
  useEffect(() => {
    if (!email || !usn) {
      navigate("/check-usn");
    }
  }, [email, usn, navigate]);

  // Signup mutation
  const mutation = useMutation({
    mutationFn: (data) => signup(data), // Replace with your actual signup API service
    onSuccess: (data) => {
      setUser(data.user);
      toast.success(data.message);
      navigate("/app");
    },
    onError: (error) => {
      // Set error using React Hook Form
      setError("apiError", {
        type: "manual",
        message: error.response?.data?.message || "Signup failed",
      });
    },
  });

  const onSubmit = (data) => {
    console.log("Submitting Signup Data:", data);
    mutation.mutate({ usn, ...data }); // Send the signup data to the API
  };

  return (
    <UtilLayout>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly h-full w-full p-4">
        {/* Left side with welcome text and image */}
        <div className="border-b lg:border-b-0 lg:border-r flex flex-col w-full lg:w-1/2 p-4 items-center justify-center mb-4 lg:mb-0">
          <div className="w-full flex flex-col items-start lg:items-center">
            <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider text-left lg:text-center flex flex-col gap-1">
              Hey,
              <span className="text-primary-yellow font-segoe-script font-bold ">
                {email}
              </span>
            </h1>
            <h2 className="text-gray-100/60 text-sm sm:text-md md:text-lg lg:text-lg tracking-wide font-semibold mt-2 lg:mt-2">
              Let's get you signed in!
            </h2>
          </div>
          <HoverCard>
            <img
              src="/Home/Login.png"
              className="h-52 w-52 lg:h-[43vh] lg:w-auto rounded-full mt-4 lg:mt-0"
              alt="Login illustration"
            />
          </HoverCard>
        </div>

        {/* Right side with form */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-4 lg:p-6 items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)} // Use handleSubmit from useForm
            className="flex flex-col gap-4 w-full sm:w-4/5 md:w-3/5 "
          >
            <div className="flex flex-col gap-1">
              <label className="text-gray-100/60 text-sm md:text-md lg:text-lg">
                Enter your Username
              </label>
              <input
                className={`p-2 rounded-2xl bg-[#E3E3E350] text-white focus:outline-none ${
                  errors.name ? "border-red-500" : ""
                }`}
                type="text"
                {...register("name", { required: "Username is required" })}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-100/60 text-sm md:text-md lg:text-lg">
                Enter password
              </label>
              <input
                className={`p-2 rounded-2xl bg-[#E3E3E350] text-white focus:outline-none ${
                  errors.password ? "border-red-500" : ""
                }`}
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-100/60 text-sm md:text-md lg:text-lg">
                Confirm password
              </label>
              <input
                className={`p-2 rounded-2xl bg-[#E3E3E350] text-white focus:outline-none ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* API error message */}
            {errors.apiError && (
              <p className="text-red-500 text-sm">{errors.apiError.message}</p>
            )}

            {/* Signup button and sign up link */}
            <div className="flex items-center justify-center w-full flex-col gap-2">
              <button
                type="submit"
                className={`bg-primary-blue h-12 w-36 text-base md:text-[1.2rem] rounded-2xl text-white font-semibold active:bg-secondary-blue active:translate-y-1 flex justify-center items-center ${
                  mutation.isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <span className="flex items-center gap-2">
                    <span className="spinner border-white border-t-transparent border-2 w-4 h-4 rounded-full animate-spin"></span>
                  </span>
                ) : (
                  "Sign up"
                )}
              </button>
              <p className="text-gray-100/50 text-xs sm:text-xs md:text-sm mt-2 tracking-wider font-medium">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary-blue font-semibold hover:underline tracking-wide"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </UtilLayout>
  );
}

export default Signup;
