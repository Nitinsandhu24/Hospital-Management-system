import express from "express";

import {addPatient} from "../controllers/patientController.js"
import {loginpatient} from "../controllers/patientController.js"
const router = express.Router();

router.post("/addpatient", addPatient);
router.post("/loginpatient",loginpatient)
export default router;
