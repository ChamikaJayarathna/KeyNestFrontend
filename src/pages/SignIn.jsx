import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import apiRequest from "../lib/apiRequest";
import AuthContext from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { setToken, setUserRole } = useContext(AuthContext);

  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const userAuthServer = async () => {
    try {
      const res = await apiRequest.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      setToken(res.data.token);
      setUserRole(res.data.role);
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!email.length) {
      return toast.error("Enter Email");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Invalid Email");
    }

    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters"
      );
    }

    userAuthServer();
  };

  return (
    <>
      <Toaster />
      <div className="flex min-h-screen flex-col items-center justify-center bg-custom-teal-blue">
        <div className="absolute top-8 text-center text-white">
          <Link to="/">
            <h1 className="text-3xl font-bold">KeyNest</h1>
            <p className="text-sm opacity-80">
              The Property Management Company
            </p>
          </Link>
        </div>

        <div className="w-full max-w-md rounded-2xl bg-custom-grayish-white p-8 shadow-lg">
          <h2 className="mb-10 text-center text-2xl font-semibold">Login</h2>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="mb-3 w-full rounded-md border border-custom-teal-blue p-3 outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-full mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="mb-2 w-full rounded-md border border-custom-teal-blue p-3 outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className="absolute right-4 top-0 h-full flex items-center cursor-pointer"
                style={{ transform: "translateY(-2px)" }}
                onClick={togglePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="mb-6 mt-2 text-right text-sm text-gray-500 w-full">
              <Link to="/forgot-password" className="hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-30 rounded-lg bg-black p-3 text-white font-semibold cursor-pointer"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="font-medium text-black hover:underline"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
