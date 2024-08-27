import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to [Hospital Name]</h1>
        <p className="text-lg text-gray-700 mb-6">
          We are committed to providing the best healthcare services to our
          patients. Explore our services, book appointments, and get the care
          you deserve.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/logindoctor"
            className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </a>
          <a
            href="/adddoctor"
            className="inline-block bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Register
          </a>
          <a
            href="/Checkpatient"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
