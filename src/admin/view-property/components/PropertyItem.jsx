import React, { useContext } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { BiSolidBed } from "react-icons/bi";
import { TbBathFilled } from "react-icons/tb";
import DeleteField from "./DeleteField";
import AuthContext from "@/context/AuthContext";
import apiRequest from "@/lib/apiRequest";

const PropertyItem = ({ property, onDeleteSuccess }) => {
  const { token } = useContext(AuthContext);

  const handleDelete = async () => {
    try {
      await apiRequest.delete(`/property/delete-property/${property._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onDeleteSuccess(property._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[350px] rounded-xl bg-white border hover:shadow-md cursor-pointer">
      <h2
        className={`absolute m-2 px-2 rounded-full text-sm text-white ${
          property?.type === "Rent"
            ? "bg-yellow-500"
            : property?.type === "Buy"
            ? "bg-green-500"
            : property?.type === "Sell"
            ? "bg-red-500"
            : ""
        }`}
      >
        {property?.type}
      </h2>

      <img
        src={property?.images[0]}
        width={"100%"}
        height={250}
        className="rounded-t-xl h-[180px] object-cover"
      />

      <div className="p-4">
        <h2 className="font-bold text-black text-lg mb-2 truncate">
          {property?.title}
        </h2>
        <Separator />
        <div className="grid md:grid-cols-3 mt-5 text-black">
          <div className="flex flex-col items-center">
            <FaBuilding className="text-lg mb-2" />
            <h2>{property?.property}</h2>
          </div>
          <div className="flex flex-col items-center">
            <BiSolidBed className="text-xl mb-2" />
            <h2>0{property?.bedroom || 0}</h2>
          </div>
          <div className="flex flex-col items-center">
            <TbBathFilled className="text-xl mb-2" />
            <h2>0{property?.bathroom || 0}</h2>
          </div>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between text-black">
          <h2 className="font-bold text-xl">LKR {property?.price.toLocaleString()}</h2>
        </div>
      </div>

      <Separator />

      <div className="p-3 flex justify-evenly gap-8">
        <Link className="w-full">
          <Button className="bg-green-700 hover:bg-green-600 w-full">
            <FaEye />
          </Button>
        </Link>
        <Link
          to={`/admin/add-property?mode=edit&id=${property._id}`}
          className="w-full"
        >
          <Button className="w-full bg-yellow-400 hover:bg-yellow-500">
            <FaEdit />
          </Button>
        </Link>
        <div className="w-full">
          <DeleteField handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
