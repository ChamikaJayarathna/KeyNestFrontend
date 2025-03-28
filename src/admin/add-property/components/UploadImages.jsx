import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const UploadImages = ({
  onUploadComplete,
  onImageRemove,
  existingImages = [],
  uploadedImages = [],
  setLoader,
}) => {
  const [selectedFileList, setSelectedFileList] = useState([]);

  let cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  let cloudinaryPreset = import.meta.env.VITE_CLOUDINARY_PRESET;

  const onFileSelected = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);
    setSelectedFileList((prev) => [...prev, ...fileArray]);
  };

  useEffect(() => {
    if (selectedFileList.length > 0) {
      uploadImages(selectedFileList);
    }
  }, [selectedFileList]);

  const uploadImages = async () => {
    setLoader(true);
    try {
      const imageUrls = await Promise.all(
        selectedFileList.map(async (image) => {
          const formData = new FormData();
          formData.append("file", image);
          formData.append("upload_preset", cloudinaryPreset);
          formData.append("folder", "properties");

          const res = await axios.post(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            formData
          );
          return res.data.secure_url;
        })
      );

      onUploadComplete(imageUrls);
      setSelectedFileList([]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const handleImageRemove = (image) => {
    onImageRemove(image);
    setSelectedFileList((prev) =>
      prev.filter((file) => URL.createObjectURL(file) !== image)
    );
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Property Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {existingImages.map((image, index) => (
          <div key={index} className="relative">
            <IoMdCloseCircle
              className="absolute m-2 text-lg text-white cursor-pointer"
              onClick={() => handleImageRemove(image)}
            />
            <img
              src={image}
              className="w-full h-[130px] object-cover rounded-xl"
            />
          </div>
        ))}
        {uploadedImages.map((image, index) => (
          <div key={index} className="relative">
            <IoMdCloseCircle
              className="absolute m-2 text-lg text-white cursor-pointer"
              onClick={() => handleImageRemove(image)}
            />
            <img
              src={image}
              className="w-full h-[130px] object-cover rounded-xl"
            />
          </div>
        ))}
        {selectedFileList.map((file, index) => (
          <div key={index} className="relative">
            <IoMdCloseCircle
              className="absolute m-2 text-lg text-white cursor-pointer"
              onClick={() => handleImageRemove(URL.createObjectURL(file))}
            />
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
