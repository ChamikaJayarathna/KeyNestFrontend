import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file to upload.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(import.meta.env.VITE_AI_SERVER_DOMAIN +"/predict");

      if (response.data.prediction) {
        navigate("/predict-property", { state: { prediction: response.data.prediction } });
      } else {
        toast.error("Prediction failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <Toaster />
      <div className="bg-white shadow-md p-6 rounded-lg w-90">
        <label htmlFor="fileInput">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
            <IoCloudUploadOutline className="mx-auto h-12 w-12 text-gray-400" />
            <p className="text-gray-500">Upload</p>
          </div>
        </label>
        <input type="file" className="hidden" id="fileInput" />
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
    </>
  );
};

export default FileUpload;
