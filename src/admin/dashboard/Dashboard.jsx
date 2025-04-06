import apiRequest from "@/lib/apiRequest";
import React, { useContext, useEffect, useState } from "react";
import Header from "../admin-components/Header";
import { FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";
import StatCard from "./components/StatCard";
import AuthContext from "@/context/AuthContext";
import PropertyTypeChart from "./components/PropertyTypeChart";

const Dashboard = () => {
  const [propertyCount, setPropertyCount] = useState();
  const [userPropertyCount, setUserPropertyCount] = useState();
  const [propertyType, setPropertyType] = useState();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    GetTotalPropertyCount();
    GetUserTotalPropertyCount();
    GetPropertyType();
  }, []);

  const GetTotalPropertyCount = async () => {
    try {
      const response = await apiRequest.get(
        "/property/get-total-property-count"
      );
      setPropertyCount(response.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  const GetUserTotalPropertyCount = async () => {
    try {
      const response = await apiRequest.get(
        "/property/get-user-total-property-count",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUserPropertyCount(response.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  const GetPropertyType = async () => {
    try {
      const response = await apiRequest.get(
        "/property/get-property-type-count"
      );
      setPropertyType(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header title="Dashboard" />
      <div className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Property Count"
            icon={FaBuilding}
            color="#FCB454"
            value={propertyCount}
          />

          <StatCard
            name="User Property Count"
            icon={FaBuilding}
            color="#F7374F"
            value={userPropertyCount}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PropertyTypeChart propertyType={propertyType} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
