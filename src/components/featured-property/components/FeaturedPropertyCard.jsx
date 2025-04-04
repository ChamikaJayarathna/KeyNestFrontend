import React from "react";

const FeaturedPropertyCard = ({ title, icon: Icon, onClick, selected }) => {
  return (
    <div
      className={`rounded-2xl p-8 max-w-[200px] w-full flex flex-col items-center justify-center cursor-pointer transition-colors duration-300 ${
        selected ? "bg-custom-lavender-blue" : "bg-custom-grayish-white"
      }`}
      onClick={onClick}
    >
      <div
        className={`rounded-full p-6 mb-4 ${
          selected ? "bg-white" : "bg-custom-lavender-blue"
        }`}
      >
        <div className="text-4xl">{Icon}</div>
      </div>
      <h2
        className={`text-xl font-bold mb-2 text-center ${
          selected ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default FeaturedPropertyCard;
