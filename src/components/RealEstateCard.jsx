import React from "react";

const RealEstateCard = ({ title, subtitle, icon: Icon }) => {
  return (
    <div className="bg-custom-grayish-white rounded-2xl p-8 max-w-[200px] w-full flex flex-col items-center justify-center">
      <div className="bg-custom-lavender-blue rounded-full p-6 mb-4">
        <div className="text-4xl">{Icon}</div>
      </div>
      <h2 className="text-xl font-bold text-black mb-2 text-center">{title}</h2>
      <p className="text-sm text-custom-steel-blue">{subtitle}</p>
    </div>
  );
};

export default RealEstateCard;
