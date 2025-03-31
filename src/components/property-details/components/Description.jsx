import React from 'react';

const Description = ({propertyDetails}) => {
  return (
    <div className='p-10 rounded-xl bg-white shadow-md mt-6 border'>
        <h2 className="my-2 font-medium text-2xl">Description</h2>
        <p>{propertyDetails?.description}</p>
    </div>
  );
}

export default Description;