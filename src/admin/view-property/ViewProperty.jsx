import React, { useContext, useEffect, useState } from "react";
import Header from "../admin-components/Header";
import PropertyItem from "./components/PropertyItem";
import AuthContext from "@/context/AuthContext";
import apiRequest from "@/lib/apiRequest";

const ViewProperty = () => {
  const [propertyDetails, setPropertyDetails] = useState([]);
  const { token } = useContext(AuthContext);

  const GetUserPropertyDetails = async () => {
    try {
      const response = await apiRequest.get("/property/get-user-properties", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPropertyDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteSuccess = (deletedPropertyId) => {
    setPropertyDetails((prevListings) =>
      prevListings.filter((property) => property._id !== deletedPropertyId)
    );
  };

  useEffect(() => {
    GetUserPropertyDetails();
  }, []);

  return (
    <div>
      <Header title={"View Property"} />
      <div className="p-8 grid gap-6 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-7">

        {propertyDetails.map((item, index) => (
          <div key={index}>
            <PropertyItem
              property={item}
              onDeleteSuccess={handleDeleteSuccess}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProperty;
