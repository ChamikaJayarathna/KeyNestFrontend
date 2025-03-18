import React from "react";
import PropertyCard from "../components/PropertyCard";

const PredictPropertyPage = ({ prediction }) => {
  return (
    <div>
      <div className="p-10 md:px-20">
        <h2 className="font-bold text-4xl ">Predicted Result</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
          {prediction?.length > 0
            ? carList.map((item, index) => (
                <div key={index}>
                  <PropertyCard />
                </div>
              ))
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div className="h-[320px] rounded-xl bg-slate-200 animate-pulse"></div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default PredictPropertyPage;
