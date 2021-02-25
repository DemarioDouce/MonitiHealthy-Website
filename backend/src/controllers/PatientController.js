//Load the 'patient' mongoose model.
const patientModel = require("../models/PatientModel");
const bcrypt = require("bcrypt");

//Display all patient.
exports.displayAllPatients = async (req, res) => {
  try {
    //Find all documents.
    let allPatients = await patientModel.find({});
    res.status(200).send(allPatients);
  } catch (e) {
    //Log Errors.
    res.status(400).send(e);
  }
};
