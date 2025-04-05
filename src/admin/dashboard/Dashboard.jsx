import apiRequest from "@/lib/apiRequest";
import React, { useEffect, useState } from "react";
import Header from "../admin-components/Header";
import { FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";
import StatCard from "./components/StatCard";

const Dashboard = () => {
  const [propertyCount, setPropertyCount] = useState();

  useEffect(() => {
    GetTotalPropertyCount();
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
            name="Total Property"
            icon={FaBuilding}
            color="#FCB454"
            value={propertyCount}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
