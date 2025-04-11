import React, { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";

const PredictPropertyPage = () => {
  const location = useLocation();
  const prediction = location.state?.prediction || [];

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (prediction.length === 0) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 10000);

      return () => clearTimeout(timer);
    } else {
      setShowLoader(false);
    }
  }, [prediction]);

  return (
    <div>
      <Header />
      <div className="p-10 md:px-20">
        <h2 className="font-bold text-4xl">Predicted Result</h2>
        <div className="px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {prediction.length > 0 ? (
            prediction.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))
          ) : showLoader ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-[320px] rounded-xl bg-slate-200 animate-pulse"
              ></div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No predicted result found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PredictPropertyPage;
