import React, { useState } from "react";
import axiosInstance from "../axiosinstance";

const RegisterDoctor = () => {
  const [formData, setFormData] = useState({
    doctor_id: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    email: "",
    phone_number: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip_code: "",
      country: "",
    },
    specialization: "",
    qualification: "",
    medical_license_number: "",
    license_issuing_authority: "",
    years_of_experience: "",
    hospital_affiliations: "",
    languages_spoken: "",
    consultation_fee: "",
    availability: {
      monday: { available: "No", time: "" },
      tuesday: { available: "No", time: "" },
      wednesday: { available: "No", time: "" },
      thursday: { available: "No", time: "" },
      friday: { available: "No", time: "" },
      saturday: { available: "No", time: "" },
      sunday: { available: "No", time: "" },
    },
    profile_photo_url: "",
    biography: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name.replace("address.", "")]: value,
        },
      });
    } else if (name.startsWith("availability.")) {
      const [day, field] = name.split(".").slice(1);
      setFormData({
        ...formData,
        availability: {
          ...formData.availability,
          [day]: {
            ...formData.availability[day],
            [field]: value,
          },
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Form Data:", formData);

      const response = await axiosInstance.post(
        "http://localhost:3000/adddoctor",
        formData
      );
      console.log("Server Response:", response);
      if (response.status === 201) {
        setMessage("Doctor registered successfully!");

        setFormData({
          doctor_id: "",
          first_name: "",
          last_name: "",
          date_of_birth: "",
          gender: "",
          email: "",
          phone_number: "",
          address: {
            street: "",
            city: "",
            state: "",
            zip_code: "",
            country: "",
          },
          specialization: "",
          qualification: "",
          medical_license_number: "",
          license_issuing_authority: "",
          years_of_experience: "",
          hospital_affiliations: "",
          languages_spoken: "",
          consultation_fee: "",
          availability: {
            monday: { available: "No", time: "" },
            tuesday: { available: "No", time: "" },
            wednesday: { available: "No", time: "" },
            thursday: { available: "No", time: "" },
            friday: { available: "No", time: "" },
            saturday: { available: "No", time: "" },
            sunday: { available: "No", time: "" },
          },
          profile_photo_url: "",
          biography: "",
        });
      } else {
        setMessage("Failed to register doctor.");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setMessage("An error occurred. Please try again.");
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Register Doctor</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="doctor_id"
          value={formData.doctor_id}
          onChange={handleChange}
          placeholder="Doctor ID"
          minLength={4}
          maxLength={4}
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="date"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
          placeholder="Date of Birth"
          min={1 - 1 - 1950}
          max={31 - 12 - 2000}
          required
        />
        <select
          className="w-full p-2 border border-gray-300 rounded"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          placeholder="Phone Number"
          minLength={10}
          maxLength={10}
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="address.street"
          value={formData.address.street}
          onChange={handleChange}
          placeholder="Street"
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="address.city"
          value={formData.address.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="address.state"
          value={formData.address.state}
          onChange={handleChange}
          placeholder="State"
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="address.zip_code"
          value={formData.address.zip_code}
          onChange={handleChange}
          placeholder="ZIP Code"
          minLength={6}
          maxLength={6}
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="address.country"
          value={formData.address.country}
          onChange={handleChange}
          placeholder="Country"
          required
        />
        <select
          className="w-full p-2 border border-gray-300 rounded"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Specialization
          </option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Orthopedic">Orthopedic</option>
          <option value="Pediatrician">Pediatrician</option>
        </select>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Qualification
          </option>
          <option value="MBBS">MBBS</option>
          <option value="MD">MD</option>
          <option value="DO">DO</option>
          <option value="PhD">PhD</option>
          <option value="MSc">MSc</option>
        </select>

        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="medical_license_number"
          value={formData.medical_license_number}
          onChange={handleChange}
          placeholder="Medical License Number"
          minLength={6}
          maxLength={6}
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="license_issuing_authority"
          value={formData.license_issuing_authority}
          onChange={handleChange}
          placeholder="License Issuing Authority"
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="number"
          name="years_of_experience"
          value={formData.years_of_experience}
          onChange={handleChange}
          placeholder="Years of Experience"
          min={5}
          required
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="hospital_affiliations"
          value={formData.hospital_affiliations}
          onChange={handleChange}
          placeholder="Hospital Affiliations (comma separated)"
          required
        />
        <select
          className="w-full p-2 border border-gray-300 rounded"
          name="languages_spoken"
          value={formData.languages_spoken}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a Language
          </option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Chinese">Chinese</option>
          <option value="Japanese">Japanese</option>
          <option value="Korean">Korean</option>
          <option value="Italian">Italian</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Russian">Russian</option>
        </select>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="number"
          name="consultation_fee"
          value={formData.consultation_fee}
          onChange={handleChange}
          placeholder="Consultation Fee"
          max={200000}
          min={0}
          required
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block font-medium">Monday</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              name="availability.monday.available"
              value={formData.availability.monday.available}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            {formData.availability.monday.available === "Yes" && (
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                name="availability.monday.time"
                value={formData.availability.monday.time}
                onChange={handleChange}
                placeholder="Time for Monday"
              />
            )}
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Tuesday</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              name="availability.tuesday.available"
              value={formData.availability.tuesday.available}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            {formData.availability.tuesday.available === "Yes" && (
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                name="availability.tuesday.time"
                value={formData.availability.tuesday.time}
                onChange={handleChange}
                placeholder="Time for Tuesday"
              />
            )}
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Wednesday</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              name="availability.wednesday.available"
              value={formData.availability.wednesday.available}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            {formData.availability.wednesday.available === "Yes" && (
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                name="availability.wednesday.time"
                value={formData.availability.wednesday.time}
                onChange={handleChange}
                placeholder="Time for Wednesday"
              />
            )}
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Thursday</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              name="availability.thursday.available"
              value={formData.availability.thursday.available}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            {formData.availability.thursday.available === "Yes" && (
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                name="availability.thursday.time"
                value={formData.availability.thursday.time}
                onChange={handleChange}
                placeholder="Time for Thursday"
              />
            )}
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Friday</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              name="availability.friday.available"
              value={formData.availability.friday.available}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            {formData.availability.friday.available === "Yes" && (
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                name="availability.friday.time"
                value={formData.availability.friday.time}
                onChange={handleChange}
                placeholder="Time for Friday"
              />
            )}
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Saturday</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              name="availability.saturday.available"
              value={formData.availability.saturday.available}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            {formData.availability.saturday.available === "Yes" && (
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                name="availability.saturday.time"
                value={formData.availability.saturday.time}
                onChange={handleChange}
                placeholder="Time for Saturday"
              />
            )}
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Sunday</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              name="availability.sunday.available"
              value={formData.availability.sunday.available}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            {formData.availability.sunday.available === "Yes" && (
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                name="availability.sunday.time"
                value={formData.availability.sunday.time}
                onChange={handleChange}
                placeholder="Time for Sunday"
              />
            )}
          </div>
        </div>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="profile_photo_url"
          value={formData.profile_photo_url}
          onChange={handleChange}
          placeholder="Profile Photo URL"
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          name="biography"
          value={formData.biography}
          onChange={handleChange}
          placeholder="Biography"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default RegisterDoctor;
