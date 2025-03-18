import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const FileUpload = () => {
  return (
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
      <div className="bg-black text-white py-2 px-6 rounded-md w-full text-center cursor-pointer hover:bg-gray-800 transition">
        Apply
      </div>
    </div>
  );
};

export default FileUpload;
