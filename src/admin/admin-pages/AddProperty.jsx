import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import apiRequest from "../../lib/apiRequest";

const AddProperty = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  let cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  let cloudinaryPreset = import.meta.env.VITE_CLOUDINARY_PRESET;

  const uploadImages = async (images) => {
    const imageUrls = await Promise.all(
      Array.from(images).map(async (image) => {
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
    return imageUrls;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    const toastLoading = toast.loading("Submitting...");

    try {
      const imageUrls = await uploadImages(selectedImages);

      await apiRequest.post("/property/create-property", {
        title: inputs.title,
        price: parseInt(inputs.price),
        address: inputs.address,
        description: new DOMParser().parseFromString(value, "text/html").body
          .textContent,
        city: inputs.city,
        bedroom: parseInt(inputs.bedroom),
        type: inputs.type,
        property: inputs.property,
        utilities: inputs.utilities,
        pet: inputs.pet,
        images: imageUrls,
      });

      toast.success("New property added successfully 👍", {
        id: toastLoading,
      });

      e.target.reset();
      setValue("");
      setSelectedImages([]);
    } catch (error) {
      setError(error.message);
      toast.error("Failed to add property.");
    }
  };

  const handleImageChange = (e) => {
    setSelectedImages(e.target.files);
  };

  return (
    <>
      <Toaster />
      <div className="d-flex justify-content-center align-items-center min-vh-100 mt-3 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card card-success card-outline shadow">
                <div className="card-header">
                  <div className="card-title">New Property</div>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="needs-validation p-4"
                  noValidate
                >
                  <div className="row g-3">
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="price" className="form-label">
                        Price
                      </label>
                      <input
                        id="price"
                        name="price"
                        type="number"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="images" className="form-label">
                        Images
                      </label>
                      <div className="input-group">
                        <input
                          type="file"
                          className="form-control"
                          id="upload"
                          accept="image/*"
                          multiple
                          onChange={handleImageChange}
                        />
                        <label className="input-group-text" htmlFor="upload">
                          Upload
                        </label>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="desc" className="form-label">
                        Description
                      </label>
                      <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="bedroom" className="form-label">
                        Bedroom Number
                      </label>
                      <input
                        min={1}
                        id="bedroom"
                        name="bedroom"
                        type="number"
                        className="form-control"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="type" className="form-label">
                        Type
                      </label>
                      <select className="form-select" name="type" required>
                        <option value="rent" defaultChecked>
                          Rent
                        </option>
                        <option value="buy">Buy</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="property" className="form-label">
                        Property
                      </label>
                      <select className="form-select" name="property" required>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="utilities" className="form-label">
                        Utilities Policy
                      </label>
                      <select className="form-select" name="utilities" required>
                        <option value="owner">Owner is responsible</option>
                        <option value="tenant">Tenant is responsible</option>
                        <option value="shared">Shared</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="pet" className="form-label">
                        Pet Policy
                      </label>
                      <select className="form-select" name="pet" required>
                        <option value="allowed">Allowed</option>
                        <option value="not-allowed">Not Allowed</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button className="btn btn-success w-100" type="submit">
                      Add Property
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProperty;
