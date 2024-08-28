import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterDoctor from "./component/doctorRegister.js";
import LoginPage from "./component/doctorlogin.js";
import Home from "./component/Home.js";
import Checkpatient from "./component/appointment.js";
import AddPatientForm from "./component/addpatient.js";
import LoginPatient from "./component/loginpatient.js";
import Addappointment from "./component/addappointment.js";
import Profile from "./component/doctorprofile.js";
import PrivateRoute from "./component/PrivateRoute.js"; // Import PrivateRoute

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adddoctor" element={<RegisterDoctor />} />
        <Route path="/logindoctor" element={<LoginPage />} />
        <Route path="/checkpatient" element={<Checkpatient />} />
        <Route path="/addpatient" element={<AddPatientForm />} />
        <Route path="/loginpatient" element={<LoginPatient />} />
        <Route path="/addappointment" element={<Addappointment />} />
        <Route
          path="/profile"
          element={<PrivateRoute element={Profile} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
