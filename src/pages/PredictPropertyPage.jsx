import React from "react";
import PropertyCard from "../components/PropertyCard";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";

const PredictPropertyPage = () => {
  const location = useLocation();
  const prediction = location.state?.prediction || [];

  return (
    <div>
      <Header/>
      <div className="p-10 md:px-20">
        <h2 className="font-bold text-4xl">Predicted Result</h2>
        <div className="px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {prediction.length > 0
            ? prediction.map((property, index) => (
                <PropertyCard key={index} property={property} />
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

export default PredictPropertyPage;
