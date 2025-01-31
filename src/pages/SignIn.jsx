import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

const SignIn = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-custom-teal-blue">
      <div className="absolute top-8 text-center text-white">
        <h1 className="text-3xl font-bold">KeyNest</h1>
        <p className="text-sm opacity-80">The Property Management Company</p>
      </div>

      <div className="w-full max-w-md rounded-2xl bg-custom-grayish-white p-8 shadow-lg">
        <h2 className="mb-10 text-center text-2xl font-semibold">Login</h2>
        <form className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Email"
            className="mb-3 w-full rounded-md border border-custom-teal-blue p-3 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-2 w-full rounded-md border border-custom-teal-blue p-3 outline-none"
          />
          <div className="mb-6 mt-1 text-left text-sm text-gray-500 w-full">
            <Link to="/forgot-password" className="hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-30 rounded-lg bg-black p-3 text-white font-semibold"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="" className="font-medium text-black hover:underline">
            Create account
          </Link>
        </div>

        <div className="my-4 flex items-center">
          <hr className="w-full border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <p className="text-center opacity-45 text-base">Continue with</p>

        <div className="mt-3 flex justify-center space-x-4">
          <button className="text-gray-700 hover:scale-105">
            <FcGoogle size={35} />
          </button>
          <button className="text-blue-600 hover:scale-105">
            <FaFacebook size={35} />
          </button>
          <button className="text-black hover:scale-105">
            <FaApple size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
