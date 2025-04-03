import { FaHouse } from "react-icons/fa6";
import { FaBuilding, FaMapMarked } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdHolidayVillage } from "react-icons/md";

const FeaturedData = [
  {
    id: 1,
    name: "House",
    icon: <FaHouse />,
  },
  {
    id: 2,
    name: "Apartment",
    icon: <FaBuilding />,
  },
  {
    id: 3,
    name: "Land",
    icon: <FaMapMarked />,
  },
  {
    id: 4,
    name: "Townhouse",
    icon: <BsFillBuildingsFill />,
  },
  {
    id: 5,
    name: "Townhouse",
    icon: <MdHolidayVillage />,
  },
];

export default FeaturedData;
