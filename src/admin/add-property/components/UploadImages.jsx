import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const UploadImages = () => {
  const [selectedFileList, setSelectedFileList] = useState([]);

  const onFileSelected = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);
    setSelectedFileList((prev) => [...prev, ...fileArray]);
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Property Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {selectedFileList.map((file, index) => (
          <div key={index} className="relative">
            <IoMdCloseCircle className="absolute m-2 text-lg text-white cursor-pointer" />
            <img
              src={URL.createObjectURL(file)}
              className="w-full h-[130px] object-cover rounded-xl"
            />
          </div>
        ))}
        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md">
            <h2 className="text-lg text-center text-primary">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple
          id="upload-images"
          className="hidden"
          onChange={onFileSelected}
          accept="image/*"
        />
      </div>
    </div>
  );
};

export default UploadImages;
