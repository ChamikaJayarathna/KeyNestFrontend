import React from 'react';

const PropertyTitle = ({propertyDetails}) => {
  return (
    <div>
        <h2 className='font-bold text-4xl'>{propertyDetails?.title}</h2>
    </div>
  );
}

export default PropertyTitle;