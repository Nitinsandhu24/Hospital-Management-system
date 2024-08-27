import Doctor from "../models/doctorschema.js";
import { catchAsyncError } from "../middleware/catchasyncerror.js";
import jwt from "jsonwebtoken";

export const addDoctor = catchAsyncError(async (req, res, next) => {
  const {
    doctor_id,
    first_name,
    last_name,
    date_of_birth,
    gender,
    email,
    phone_number,
    address,
    specialization,
    qualification,
    medical_license_number,
    license_issuing_authority,
    years_of_experience,
    hospital_affiliations,
    languages_spoken,
    consultation_fee,
    availability,
    profile_photo_url,
    biography,
    status,
  } = req.body;

  try {
    const doctor = new Doctor({
      doctor_id,
      first_name,
      last_name,
      date_of_birth,
      gender,
      email,
      phone_number,
      address,
      specialization,
      qualification,
      medical_license_number,
      license_issuing_authority,
      years_of_experience,
      hospital_affiliations,
      languages_spoken,
      consultation_fee,
      availability,
      profile_photo_url,
      biography,
      status: status || "Active",
      registration_date: new Date(),
    });

    const savedDoctor = await doctor.save();

    res.status(201).json({
      success: true,
      message: "Doctor registered successfully",
      doctor: savedDoctor,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

export const logindoctor = catchAsyncError(async (req, res, next) => {
  const { email, doctor_id } = req.body;

  try {
   
    const doctor = await Doctor.findOne({ email, doctor_id });

    if (!doctor) {
      return res.status(400).json({
        success: false,
        message: "Doctor not found or invalid credentials",
      });
    }

    const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
