import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const AddPatientForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    address: "",
    medicalHistory: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/addpatient",
        formData
      );
      setMessage(response.data.message);

      
      if (response.status === 201) {
        navigate("/addappointment");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error adding patient.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/loginpatient");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg text-center">
        <h2 className="text-3xl font-bold mb-4">New Patient Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="block w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="block w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="block w-full p-2 mb-4 border rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="block w-full p-2 mb-4 border rounded"
          />
          <textarea
            name="medicalHistory"
            placeholder="Medical History"
            value={formData.medicalHistory}
            onChange={handleChange}
            className="block w-full p-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Register and Book
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={handleLoginRedirect}
            className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </div>

        {message && <p className="mt-4 text-red-600">{message}</p>}
      </div>
    </div>
  );
};

export default AddPatientForm;
