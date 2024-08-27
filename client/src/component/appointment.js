import React from "react";

const Checkpatient = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
        <p className="text-lg text-gray-700 mb-8">
          Please let us know if you are an existing patient or a new patient.
        </p>
        <div className="flex flex-col space-y-4">
          <a
            href="/loginpatient"
            className="bg-indigo-600 text-white py-3 px-6 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          >
            Existing Patient
          </a>
          <a
            href="/addpatient"
            className="bg-green-600 text-white py-3 px-6 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
          >
            New Patient
          </a>
        </div>
      </div>
    </div>
  );
};

export default Checkpatient;
