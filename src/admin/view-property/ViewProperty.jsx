import React, { useContext, useEffect, useState } from 'react';
import Header from '../admin-components/Header';
import PropertyItem from './components/PropertyItem';
import AuthContext from '@/context/AuthContext';
import apiRequest from '@/lib/apiRequest';

const ViewProperty = () => {

  const [propertyDetails, setPropertyDetails] = useState([]);
  const { token } = useContext(AuthContext);

  const GetUserPropertyDetails = async () => {
    try {
      const response = await apiRequest.get('/property/get-user-properties',{
        headers: { Authorization: `Bearer ${token}` },
      });
      setPropertyDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    GetUserPropertyDetails();
  },[]);

  return (
    <div>
      <Header title={"View Property"} />
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-8">
        {propertyDetails.map((item, index) => (
          <div key={index}>
            <PropertyItem property={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewProperty;