import express from "express";
import dotenv from "dotenv";
import { db } from "./db/database.js";
import cors from "cors";
import adddoctorrouter from "./routes/doctorrouter.js";
import logindoctor from "./routes/doctorrouter.js";
import addPatient from "./routes/Patientroute.js";
import loginpatient from "./routes/Patientroute.js"

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", adddoctorrouter);
app.use("/", logindoctor);
app.use("/", addPatient);
app.use("/",loginpatient)
db();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
