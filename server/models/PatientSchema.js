import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  patientID: {
    type: Number,
    unique: true,
    required: true,
    default: function () {
      return Math.floor(100000 + Math.random() * 900000);
    },
  },
  dateOfBirth: {
    type: Date,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  medicalHistory: {
    type: [String],
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

patientSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
