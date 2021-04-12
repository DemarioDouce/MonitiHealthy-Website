const nurses = require("../../app/controllers/nurses.server.controller");
var patients = require("../../app/controllers/patients.server.controller");
//
module.exports = function (app) {
  //handle a post request made to root path
  app.post("/registernurse", nurses.create);
  //authenticate user
  app.post("/signinnurse", nurses.authenticate);
  app.get("/signoutnurse", nurses.signout);
  app.get("/read_cookie", nurses.isSignedIn);
  app.get("/all_patients", patients.list);

  app.route('/api/patientrecs/:patientId')
            .get(patients.healthinfobyPatient)
            .post(nurses.addPatientHealthInfo)

  app.param('patientId', nurses.patientByID);
};
