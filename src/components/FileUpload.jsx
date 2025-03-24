import axios from "axios";
import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    if (!file) {
      console.log("Please select a file to upload.");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        `${import.meta.env.VITE_AI_SERVER_DOMAIN}/predict`,
        formData
      );

      if (response.data?.matched_properties) {
        navigate("/predict-property", {
          state: { prediction: response.data.matched_properties },
        });
      } else {
        console.error(
          "Error: Response does not contain matched_properties",
          response.data
        );
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg w-90">
      <label htmlFor="fileInput">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
          <IoCloudUploadOutline className="mx-auto h-12 w-12 text-gray-400" />
          <p className="text-gray-500">Upload</p>
        </div>
      </label>
      <input
        type="file"
        className="hidden"
        id="fileInput"
        accept="image/*"
        onChange={handleFileChange}
      />
      <p className="text-center text-gray-700 mb-4">
        Select From Device Or Drag Here
      </p>
      <button
        onClick={handleUpload}
        className="bg-black text-white py-2 px-6 rounded-md w-full hover:bg-gray-800 transition"
        disabled={loading}
      >
        {loading ? "Processing..." : "Apply"}
      </button>
    </div>
  );
};

export default FileUpload;
