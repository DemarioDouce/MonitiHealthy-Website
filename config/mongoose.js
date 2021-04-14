// Load the module dependencies:
//  config.js module and mongoose module
var config = require("./config"),
  mongoose = require("mongoose");
// Define the Mongoose configuration method
module.exports = function () {
  // Use Mongoose to connect to MongoDB
  const db = mongoose
    .connect(config.db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => console.log("DB Connected!"))
    .catch((err) => {
      console.log("Error");
    });

  // Load the 'Nurse' model
  require("../app/models/nurse.server.model");
  // Load the 'Patient' model
  require("../app/models/patient.server.model");
  // Load the 'HealthInfo' model
  require("../app/models/healthinfo.server.model");
  // Load the 'Alert' model
  require("../app/models/alert.server.model");
  // Load the 'motivational tips' model
  require("../app/models/motivationaltips.server.model");
  // Return the Mongoose connection instance
  return db;
};
