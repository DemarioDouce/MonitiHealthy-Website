const express = require("express");
const router = new express.Router();
require("../db/mongoose");

//Load the 'patient' controller.
var patient = require("../controllers/PatientController");

//handle a get request made to /patient/all.
router.get("/patient/all", patient.displayAllPatients);

module.exports = router;
