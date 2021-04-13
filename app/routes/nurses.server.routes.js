const nurses = require("../../app/controllers/nurses.server.controller");
//
module.exports = function (app) {
  //handle a post request made to root path
  app.post("/registernurse", nurses.create);
  //authenticate user
  app.post("/signinnurse", nurses.authenticate);
  app.get("/signoutnurse", nurses.signout);
  app.get("/nurse_read_cookie", nurses.isSignedIn);

  app.get("/list-patients", nurses.requiresLogin, nurses.listPatients);
};
