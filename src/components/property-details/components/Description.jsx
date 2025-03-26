import React from 'react';

const Description = ({propertyDetails}) => {
  return (
    <div>
        <h2 className="my-2 font-medium text-2xl">Description</h2>
        <p>{propertyDetails?.description}</p>
    </div>
  );
}

export default Description;