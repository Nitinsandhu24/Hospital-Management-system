import express from "express";
import { addDoctor, logindoctor } from "../controllers/DoctorContoller.js";
import { verifyToken } from "../middleware/doctorjwtverification.js";

const router = express.Router();


router.post("/adddoctor", addDoctor);


router.post("/logindoctor", logindoctor);


router.get("/profile", (req, res) => {
  
  res.status(200).json({
    success: true,
    doctor: req.doctor, 
  });
});

export default router;
