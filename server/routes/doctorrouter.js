import express from "express";

import { addDoctor, logindoctor } from "../controllers/DoctorContoller.js";

const router = express.Router();


router.post("/adddoctor", addDoctor);
router.post("/logindoctor", logindoctor);
export default router;
