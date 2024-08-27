import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema({
  available: {
    type: String,
    enum: ["Yes", "No"],
    default: "No",
  },
  time: {
    type: String,
    required: function () {
      return this.available === "Yes";
    },
    default: "",
  },
});

const doctorSchema = new mongoose.Schema({
  doctor_id: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip_code: String,
    country: String,
  },
  specialization: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  medical_license_number: {
    type: String,
    required: true,
    unique: true,
  },
  license_issuing_authority: {
    type: String,
    required: true,
  },
  years_of_experience: {
    type: Number,
    required: true,
  },
  hospital_affiliations: {
    type: [String],
    default: [],
  },
  languages_spoken: {
    type: String,
    required: true,
  },
  consultation_fee: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  availability: {
    monday: { type: availabilitySchema, default: () => ({}) },
    tuesday: { type: availabilitySchema, default: () => ({}) },
    wednesday: { type: availabilitySchema, default: () => ({}) },
    thursday: { type: availabilitySchema, default: () => ({}) },
    friday: { type: availabilitySchema, default: () => ({}) },
    saturday: { type: availabilitySchema, default: () => ({}) },
    sunday: { type: availabilitySchema, default: () => ({}) },
  },
  profile_photo_url: {
    type: String,
    default: "",
  },
  biography: {
    type: String,
    default: "",
  },
  registration_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
