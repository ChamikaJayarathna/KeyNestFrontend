import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

const ViewProperty = () => {
  const [properties, setProperties] = useState([]);

  const fetchAllProperties = async () => {
    try {
      const res = await apiRequest.get("/property/get-all-property");
      setProperties(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await apiRequest.delete(`/property/delete-property/${id}`);
        setProperties(properties.filter((property) => property._id !== id));
      } catch (error) {
        console.log("Error deleting property:", error);
      }
    }
  };

  useEffect(() => {
    fetchAllProperties();
  }, []);

  return (
    <div className="app-content mt-4">
      <div className="container-fluid">
        <div className="card mb-4">
          <div className="card-header">
            <h3 className="card-title mt-2">View All Property</h3>
            <div className="card-tools">
              <ul className="pagination pagination-sm float-end mt-1">
                <li className="page-item">
                  <a className="page-link" href="#">
                    «
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    »
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-body p-0">
            <table className="table">
              <thead>
                <tr>
                  <th style={{ width: 10 }}>#</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Address</th>
                  <th>Description</th>
                  <th>City</th>
                  <th>Bedroom Number</th>
                  <th>Type</th>
                  <th>Property</th>
                  <th>Utilities Policy</th>
                  <th>Pet Policy</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property, index) => (
                  <tr key={property._id} className="align-middle">
                    <td>{index + 1}</td>
                    <td>{property.title}</td>
                    <td>{property.price}</td>
                    <td>{property.address}</td>
                    <td>{property.description}</td>
                    <td>{property.city}</td>
                    <td>{property.bedroom}</td>
                    <td>{property.type}</td>
                    <td>{property.property}</td>
                    <td>{property.utilities}</td>
                    <td>{property.pet}</td>
                    <td>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <Link to={`/view-single-property/${property._id}`}>
                            <button className="btn btn-warning">
                              <i className="bi bi-eye text-white"></i>
                            </button>
                          </Link>
                          <Link to={`/update-property/${property._id}`}>
                            <button className="btn btn-success ms-2">
                              <i className="bi bi-pencil-square text-white"></i>
                            </button>
                          </Link>
                          <button
                            className="btn btn-danger ms-2"
                            onClick={() => handleDelete(property._id)}
                          >
                            <i className="bi bi-trash-fill text-white"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;