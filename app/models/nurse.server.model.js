const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const NurseSchema = new Schema({
  firstName: { type: String, required: true },

  lastName: { type: String, required: true },
  userName: {
    type: String,
    // Set a unique 'userName' index for nurse
    unique: true,
    // Validate 'username' value existance
    required: "Username is required",
  },

  password: {
    type: String,
    // Validate the 'password' value length
    validate: [
      (password) => password && password.length > 6,
      "Password should be longer",
    ],
  },
});

// Use a pre-save middleware to hash the password
// before saving it into database
NurseSchema.pre("save", function (next) {
  //hash the password before saving it
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

// Create an instance method for authenticating user
NurseSchema.methods.authenticate = function (password) {
  //compare the hashed password of the database
  //with the hashed version of the password the user enters
  return this.password === bcrypt.hashSync(password, saltRounds);
};
mongoose.model("Nurse", NurseSchema);
