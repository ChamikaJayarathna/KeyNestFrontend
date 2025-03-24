import React, { useEffect, useState } from 'react';
import apiRequest from '../lib/apiRequest';
import { useParams } from 'react-router-dom';

const PropertyDetailsCard = () => {

    const [propertyDetails, setPropertyDetails] = useState();
    const [selectedImage, setSelectedImage] = useState(0);
    const { id } = useParams();

    useEffect(()=>{
        GetPropertyDetails();
    },[]);

    const GetPropertyDetails = async () => {
        try {
            const response =  await apiRequest.get(`/property/get-single-property/${id}`);
            setPropertyDetails(response.data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <div className="animate-fade-in">
            <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-100">
            {/* <AspectRatio ratio={16/9} className="bg-gray-200"> */}
            <img 
                src={propertyDetails?.images[0]} 
                className="w-full h-full object-cover transition-all duration-300"
            />
            {/* </AspectRatio> */}
            </div>
        </div>
    </div>
  );
}

export default PropertyDetailsCard;