const patients = require("../../app/controllers/patients.server.controller");
const healthInfo = require("../../app/controllers/healthinfo.server.controller");
const nurses = require("../../app/controllers/nurses.server.controller");
//
module.exports = function (app) {
  app
    .route("/api/add-healthInfo")
    .post(patients.requiresLogin, healthInfo.create);
  app.get(
    "/api/all-healthinfo",
    patients.requiresLogin,
    healthInfo.healthinfobyPatient
  );
  app
    .route("/api/nurse-add-healthInfo")
    .post(nurses.requiresLogin, healthInfo.create);
};
