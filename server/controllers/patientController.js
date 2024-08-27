import Patient from "../models/PatientSchema.js";

export const addPatient = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      dateOfBirth,
      address,
      medicalHistory,
    } = req.body;

    // Check if a patient with the same email or phone number already exists
    const existingPatient = await Patient.findOne({
      $or: [{ email }, { phoneNumber }],
    });
    if (existingPatient) {
      return res.status(400).json({
        message: "Patient with this email or phone number already exists.",
      });
    }

    // Create a new patient
    const newPatient = new Patient({
      fullName,
      email,
      phoneNumber,
      dateOfBirth,
      address,
      medicalHistory,
    });

    await newPatient.save();

    res
      .status(201)
      .json({ message: "Patient added successfully.", patient: newPatient });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding patient.", error: error.message });
  }
};


export const loginpatient = async (req, res) => {
  try {
    const { email } = req.body;

    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(404).json({
        message: "Patient not found. Please check the email and try again.",
      });
    }

    
    res.status(200).json({
      message: "Login successful.",
      patient: {
        fullName: patient.fullName,
        email: patient.email,
        phoneNumber: patient.phoneNumber,
        patientID: patient.patientID,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error logging in.", error: error.message });
  }
};
