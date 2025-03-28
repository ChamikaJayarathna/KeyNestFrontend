import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { MdLocationSearching } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";

const iconMap = {
  FaClipboardList: <FaClipboardList />,
  FaLocationDot: <FaLocationDot />,
  FaMoneyBill: <FaMoneyBill />,
  IoHome: <IoHome />,
  FaBed: <FaBed />,
  BsBuildingsFill: <BsBuildingsFill />,
  IoGrid: <IoGrid />,
  FaTools: <FaTools />,
  GiSittingDog: <GiSittingDog />,
  MdLocationSearching: <MdLocationSearching />,
  FaLocationCrosshairs: <FaLocationCrosshairs />,
  FaFileAlt: <FaFileAlt />,
};

const IconField = ({ icon }) => {
  return <div className="text-primary bg-blue-100 p-1.5 rounded-full">{iconMap[icon]}</div>;
};

export default IconField;
