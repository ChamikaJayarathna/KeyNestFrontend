import React, { useEffect, useState } from "react";
import apiRequest from "../lib/apiRequest";
import PropertyCard from "../components/PropertyCard";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";

const SearchPage = () => {
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(true);
  const { query } = useParams();

  useEffect(() => {
    setLoading(true);
    SearchProperty();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
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
      <Header />
      <div className="p-15 md:px-20">
        <h2 className="font-bold text-4xl">Search Result</h2>
        <div className="px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {property.length > 0 ? (
            property.map((item, index) => (
              <div key={index}>
                <PropertyCard property={item} />
              </div>
            ))
          ) : loading ? (
            [...Array(6)].map((_, index) => (
              <div
                key={index}
                className="h-[320px] rounded-xl bg-slate-200 animate-pulse"
              ></div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No search result found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
