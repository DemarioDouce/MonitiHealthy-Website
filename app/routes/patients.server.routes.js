// Load the 'users' controller
var patients = require("../../app/controllers/patients.server.controller");
// Define the routes module' method
module.exports = function (app) {
  //handle a post request made to root path
  app.post("/registerpatient", patients.create);
  //authenticate user
  app.post("/signinpatient", patients.authenticate);
  app.get("/signoutpatient", patients.signout);
  app.get("/read_cookie", patients.isSignedIn);
};
