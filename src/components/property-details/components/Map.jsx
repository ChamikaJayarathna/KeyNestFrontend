import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";

const Map = ({ propertyDetails }) => {
  return (
    <div className="rounded-md overflow-hidden">
      <MapContainer
        center={[propertyDetails?.latitude, propertyDetails?.longitude]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "300px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Pin item={propertyDetails} />
      </MapContainer>
    </div>
  );
};

export default Map;
