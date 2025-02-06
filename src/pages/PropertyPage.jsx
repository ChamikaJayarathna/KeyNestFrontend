import React from 'react';
import NavBar from '../components/NavBar';
import SidebarFilter from '../components/SidebarFilter';

const PropertyPage = () => {
  return (
    <>
        <NavBar />
        <div className="h-screen flex">
            <div className="w-1/4 p-4 border-r-4">
                <SidebarFilter />
            </div>
            <div className="listContainer"></div>
        </div>
    </>
  );
}

export default PropertyPage;