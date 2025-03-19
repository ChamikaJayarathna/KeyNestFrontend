import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ReactQuill from "react-quill-new";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

const UpdateProperty = () => {
  const { id } = useParams();
  const [value, setValue] = useState("");
  const [property, setProperty] = useState({
    title: "",
    price: "",
    address: "",
    city: "",
    bedroom: "",
    type: "rent",
    property: "apartment",
    utilities: "owner",
    pet: "allowed",
  });

  const getProperty = async () => {
    try {
      const response = await apiRequest.get(
        `/property/get-single-property/${id}`
      );
      const data = response.data;
      setProperty({
        title: data.title,
        price: data.price,
        address: data.address,
        city: data.city,
        bedroom: data.bedroom,
        type: data.type,
        property: data.property,
        utilities: data.utilities,
        pet: data.pet,
      });
      setValue(data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProperty = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const propertyData = {
      title: formData.get("title"),
      price: formData.get("price"),
      address: formData.get("address"),
      description: new DOMParser().parseFromString(value, "text/html").body
        .textContent,
      city: formData.get("city"),
      bedroom: formData.get("bedroom"),
      type: formData.get("type"),
      property: formData.get("property"),
      utilities: formData.get("utilities"),
      pet: formData.get("pet"),
    };

    const toastLoading = toast.loading("Updating property...");

    try {
      await apiRequest.post(`/property/update-property/${id}`, propertyData);
      toast.success("Property updated successfully 👍", { id: toastLoading });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperty();
  }, []);

  return (
    <>
      <Toaster />
      <div className="d-flex justify-content-center align-items-center min-vh-100 mt-3 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card card-warning card-outline shadow">
                <div className="card-header">
                  <div className="card-title">Update Property</div>
                </div>
                <form
                  className="needs-validation p-4"
                  noValidate
                  onSubmit={updateProperty}
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
                        value={property.title}
                        onChange={(e) =>
                          setProperty({ ...property, title: e.target.value })
                        }
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
                        value={property.price}
                        onChange={(e) =>
                          setProperty({ ...property, price: e.target.value })
                        }
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
                        value={property.address}
                        onChange={(e) =>
                          setProperty({ ...property, address: e.target.value })
                        }
                      />
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
                        value={property.city}
                        onChange={(e) =>
                          setProperty({ ...property, city: e.target.value })
                        }
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
                        value={property.bedroom}
                        onChange={(e) =>
                          setProperty({ ...property, bedroom: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="type" className="form-label">
                        Type
                      </label>
                      <select
                        className="form-select"
                        name="type"
                        value={property.type}
                        onChange={(e) =>
                          setProperty({ ...property, type: e.target.value })
                        }
                        required
                      >
                        <option value="rent">Rent</option>
                        <option value="buy">Buy</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="property" className="form-label">
                        Property
                      </label>
                      <select
                        className="form-select"
                        name="property"
                        value={property.property}
                        onChange={(e) =>
                          setProperty({ ...property, property: e.target.value })
                        }
                        required
                      >
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
                      <select
                        className="form-select"
                        name="utilities"
                        value={property.utilities}
                        onChange={(e) =>
                          setProperty({
                            ...property,
                            utilities: e.target.value,
                          })
                        }
                        required
                      >
                        <option value="owner">Owner is responsible</option>
                        <option value="tenant">Tenant is responsible</option>
                        <option value="shared">Shared</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="pet" className="form-label">
                        Pet Policy
                      </label>
                      <select
                        className="form-select"
                        name="pet"
                        value={property.pet}
                        onChange={(e) =>
                          setProperty({ ...property, pet: e.target.value })
                        }
                        required
                      >
                        <option value="allowed">Allowed</option>
                        <option value="not-allowed">Not Allowed</option>
                      </select>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-warning" type="submit">
                      Update Property
                    </button>
                    <Link to="/view-property">
                      <button type="button" className="btn btn-success">
                        Cancel
                      </button>
                    </Link>
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

export default UpdateProperty;
