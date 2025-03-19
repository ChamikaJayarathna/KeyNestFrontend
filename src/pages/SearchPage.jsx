import React, { useEffect, useState } from "react";
import apiRequest from "../lib/apiRequest";
import PropertyCard from "../components/PropertyCard";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const [property, setProperty] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    SearchProperty();
  }, [query]);

  const SearchProperty = async () => {
    try {
      const response = await apiRequest.post(
        `/property/search-property?query=${query}`
      );
      setProperty(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="p-10 md:px-20">
        <h2 className="font-bold text-4xl">Search Result</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
          {property.length > 0
            ? property.map((item, index) => (
                <div key={index}>
                  <PropertyCard property={item} />
                </div>
              ))
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="h-[320px] rounded-xl bg-slate-200 animate-pulse"
                ></div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
