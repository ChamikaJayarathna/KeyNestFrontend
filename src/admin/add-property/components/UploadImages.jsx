import React from 'react';

const UploadImages = () => {
  return (
    <div>
        <h2 className="font-medium text-xl my-3">Upload Property Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            <label htmlFor="upload-images">
                <div className="border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md">
                    <h2 className="text-lg text-center text-primary">+</h2>
                </div>
            </label>
            <input type="file" multiple id="upload-images" className="hidden" accept="image/*" />
        </div>
    </div>
  );
}

export default UploadImages;