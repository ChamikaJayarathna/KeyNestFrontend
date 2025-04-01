import React from 'react';

const Description = ({propertyDetails}) => {
  return (
    <div className='p-10 rounded-xl bg-white shadow-md border mt-5'>
        <h2 className="my-2 font-medium text-2xl">Description</h2>
        <p>{propertyDetails?.description}</p>
    </div>
  );
}

export default Description;