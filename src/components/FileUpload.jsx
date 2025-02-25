import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPrediction("");
    setRentals([]);
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setError("");
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setPrediction(response.data.predicted_label);
      setRentals(response.data.matching_rentals);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Upload an Image</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 w-full text-sm"
      />
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Processing..." : "Upload & Predict"}
      </button>
      {prediction && (
        <div className="mt-6">
          <h3 className="text-lg font-medium">Prediction: {prediction}</h3>
          <h4 className="text-md mt-4 font-semibold">Matching Rentals:</h4>
          {rentals.length > 0 ? (
            <ul className="list-disc pl-5 mt-2">
              {rentals.map((rental) => (
                <li key={rental._id}>
                  <strong>{rental.title}</strong>: {rental.features}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 mt-2">No matching rentals found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;