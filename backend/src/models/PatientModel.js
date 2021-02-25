// Load the Mongoose module and Schema object
const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const patientSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: {
    type: String,
    unique: true,
    required: true,
    //Validate that the email is correct.
    validate(value) {
      if (!isEmail(value)) {
        return "Email is invalid.";
      }
    },
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },
});

//This is where you specify what you would like to return.
patientSchema.methods.toJSON = function () {
  let patientProfile = this;
  let patientObject = patientProfile.toObject();

  //Delete what you do not want to return using the attributes.
  delete patientObject._id;
  delete patientObject.password;
  delete patientObject.__v;
  return patientObject;
};

//hash the plain text password before saving
patientSchema.pre("save", async function (next) {
  let patient = this;

  if (patient.isModified("password")) {
    patient.password = await bcrypt.hash(patient.password, 10);
  }

  next();
});

const patient = mongoose.model("patient", patientSchema);

module.exports = patient;
