import React from "react";
import { Marker, Popup } from "react-leaflet";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex gap-5">
          <img
            src={item.img}
            className="w-16 h-12 object-cover rounded-md"
          />
          <div className="flex flex-col justify-between">
            <h1 className="text-blue-600 hover:underline">{item.title}</h1>
            <span>{item.bedroom} bedroom</span>
            <b className="text-lg">$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
