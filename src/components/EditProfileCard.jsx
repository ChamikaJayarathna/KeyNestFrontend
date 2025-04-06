import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "./ui/button";

const EditProfileCard = ({ profileDetail }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(profileDetail?.username);
  const [password, setPassword] = useState("");

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="w-[500px] h-[550px] mx-auto bg-amber-300 p-8 rounded-lg shadow-lg mt-10 ">
      <form>
        <img
          src={profileDetail?.profile_img}
          className="w-30 h-30 mx-auto mb-4 object-cover"
        />

        <div className="">
          <label className="text-sm font-medium text-gray-700 text-left w-full mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Name"
            value={username}
            className="mb-5 w-full rounded-md border border-custom-teal-blue p-3 outline-none"
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="relative w-full">
            <label className="text-sm font-medium text-gray-700 text-left w-full mb-1">
              Password
            </label>
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
        </div>
        <div className="flex justify-center gap-4 mt-20">
          <Button className="flex-1 max-w-[180px] bg-green-600 hover:bg-green-700">
            Update Profile
          </Button>
          <Button className="flex-1 max-w-[180px]" onClick={() => setIsEditing(false)}>Back to Profile</Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileCard;
