import AuthContext from "@/context/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import apiRequest from "@/lib/apiRequest";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import EditProfileCard from "./EditProfileCard";

const ProfileCard = () => {
  const [profileDetail, setProfileDetail] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const { token, removeFromSession } = useContext(AuthContext);
  const navigate = useNavigate();

  const GetProfile = async () => {
    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken._id;
      const response = await apiRequest.get(`/auth/profile/${userId}`);
      setProfileDetail(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    removeFromSession();
    navigate("/");
  };

  useEffect(() => {
    GetProfile();
  }, []);

  return (
    <div>
      {!isEditing ? (
        <div className="w-[500px] h-[450px] mx-auto p-10 border rounded-xl mt-10 shadow-md">
          <img
            src={profileDetail?.profile_img}
            className="w-30 h-30 mx-auto mb-4 object-cover"
          />
          <div className="text-center mt-5">
            <h1 className="text-3xl font-bold text-gray-800">
              {profileDetail?.username}
            </h1>
            <p className="text-gray-600 text-base">{profileDetail?.email}</p>
          </div>
          <div className="flex justify-center gap-8 mt-20">
            <Button
              className="flex-1 max-w-[180px]"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </Button>
            <Button
              className="flex-1 max-w-[180px]"
              onClick={handleLogout}
              variant="destructive"
            >
              Logout
            </Button>
          </div>
        </div>
      ) : (
        <EditProfileCard
          profileDetail={profileDetail}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default ProfileCard;
