﻿const Nurse = require("mongoose").model("Nurse");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const jwtExpirySeconds = 300;
const jwtKey = config.secretKey;
const { ObjectId } = require("mongodb");
const Patient = require("mongoose").model("Patient");
const HealthInfo = require("mongoose").model("HealthInfo");
const MotivationalTips = require("mongoose").model("MotivationalTips");

function getErrorMessage(err) {
  if (err.errors) {
    for (let errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return "Unknown server error";
  }
}

//
exports.create = function (req, res, next) {
  const nurse = new Nurse(req.body);
  console.log("body: " + req.body.userName);

  // Use the 'Nurse' instance's 'save' method to save a new nurse document
  nurse.save(function (err) {
    if (err) {
      // Call the next middleware with an error message
      return next(err);
    } else {
      // Use the 'response' object to send a JSON response
      res.json(nurse);
    }
  });
};

exports.authenticate = function (req, res, next) {
  // Get credentials from request
  console.log(req.body);
  const userName = req.body.auth.userName;
  const password = req.body.auth.password;
  console.log(userName);
  console.log(password);
  //find the nurse with given userName using static method findOne
  Nurse.findOne({ userName: userName }, (err, nurse) => {
    if (err) {
      return next(err);
    } else {
      console.log(nurse);
      //compare passwords
      if (bcrypt.compareSync(password, nurse.password)) {
        // Create a new token with the nurse id, userName number, and firstname in the payload
        // and which expires 300 seconds after issue
        const token = jwt.sign(
          {
            id: nurse._id,
            userName: nurse.userName,
            firstName: nurse.firstName,
          },
          jwtKey,
          { algorithm: "HS256", expiresIn: jwtExpirySeconds }
        );
        console.log("token:", token);
        // set the cookie as the token string, with a similar max age as the token
        // here, the max age is in milliseconds
        res.cookie("token", token, {
          maxAge: jwtExpirySeconds * 1000,
          httpOnly: true,
        });
        res.status(200).send({ screen: nurse.firstName });
        //

        req.nurse = nurse;
        //call the next middleware
        next();
      } else {
        res.json({
          status: "error",
          message: "Invalid userName/password!!!",
          data: null,
        });
      }
    }
  });
};

//sign out function in controller
//deletes the token on the client side by clearing the cookie named 'token'
exports.signout = (req, res) => {
  res.clearCookie("token");
  return res.status("200").json({ message: "signed out" });
  // Redirect the user back to the main application page
  //res.redirect('/');
};

//check if the user is signed in
exports.isSignedIn = (req, res) => {
  // Obtain the session token from the requests cookies,
  // which come with every request
  const token = req.cookies.token;
  console.log(token);
  // if the cookie is not set, return 'auth'
  if (!token) {
    return res.send({ screen: "auth" }).end();
  }
  var payload;
  try {
    // Parse the JWT string and store the result in `payload`.
    // Note that we are passing the key in this method as well. This method will throw an error
    // if the token is invalid (if it has expired according to the expiry time we set on sign in),
    // or if the signature does not match
    payload = jwt.verify(token, jwtKey);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      // the JWT is unauthorized, return a 401 error
      return res.status(401).end();
    }
    // otherwise, return a bad request error
    return res.status(400).end();
  }

  // Finally, token is ok, return the firstName given in the token
  res.status(200).send({ screen: payload.firstName });
};

//isAuthenticated() method to check whether a user is currently authenticated
exports.requiresLogin = function (req, res, next) {
  // Obtain the session token from the requests cookies,
  // which come with every request
  const token = req.cookies.token;
  console.log(token);
  // if the cookie is not set, return an unauthorized error
  if (!token) {
    return res.send({ screen: "auth" }).end();
  }
  var payload;
  try {
    // Parse the JWT string and store the result in `payload`.
    // Note that we are passing the key in this method as well. This method will throw an error
    // if the token is invalid (if it has expired according to the expiry time we set on sign in),
    // or if the signature does not match
    payload = jwt.verify(token, jwtKey);
    console.log("in requiresLogin - payload:", payload);
    req.id = payload.id;
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      // if the error thrown is because the JWT is unauthorized, return a 401 error
      return res.status(401).end();
    }
    // otherwise, return a bad request error
    return res.status(400).end();
  }
  // student is authenticated
  //call next function in line
  next();
};

exports.patientByID = function (req, res, next, id) {
  Patient.findById(id)
    .populate("patient", "firstName lastName fullName")
    .exec((err, patient) => {
      if (err) return next(err);
      if (!patient) return next(new Error("Failed to load course " + id));
      req.id = patient._id;
      console.log("in patientById:", req.id);
      next();
    });
};

exports.addPatientHealthInfo = function (req, res) {
  const healthInfo = new HealthInfo();
  healthInfo.pulseRate = req.body.pulseRate;
  healthInfo.bloodPressure = req.body.bloodPressure;
  healthInfo.weight = req.body.weight;
  healthInfo.temperature = req.body.temperature;
  healthInfo.respiratoryRate = req.body.respiratoryRate;

  Patient.findById({ _id: ObjectId(req.id) }, (err, patient) => {
    if (err) {
      return getErrorMessage(err);
    }
    //
    req.id = patient._id;
  }).then(function () {
    healthInfo.patient = req.id;
    console.log("req.patient._id", req.id);

    healthInfo.save((err) => {
      if (err) {
        console.log("error", getErrorMessage(err));

        return res.status(400).send({
          message: getErrorMessage(err),
        });
      } else {
        res.status(200).json(healthInfo);
      }
    });
  });
};

exports.healthinfobyPatient = async (req, res, id) => {
  //let courseCode = req.body.auth.courseCode
  //console.log(courseCode);
  console.log(req.id);
  let healthinfos = await HealthInfo.find({ patient: ObjectId(req.id) });
  console.log(healthinfos);
  res.status(200).json(healthinfos);
};

exports.sendMotivationalTips = function (req, res) {
  const motivationalTips = new MotivationalTips();
  motivationalTips.message = req.body.message;
  console.log(req.body.message);

  Patient.findById({ _id: ObjectId(req.id) }, (err, patient) => {
    if (err) {
      return getErrorMessage(err);
    }
    //
    req.id = patient._id;
  }).then(function () {
    motivationalTips.patient = req.id;
    console.log("req.patient._id", req.id);

    motivationalTips.save((err) => {
      if (err) {
        console.log("error", getErrorMessage(err));

        return res.status(400).send({
          message: getErrorMessage(err),
        });
      } else {
        console.log("Motivational Tip successfully sent");
        res.status(200).json(motivationalTips);
      }
    });
  });
};
