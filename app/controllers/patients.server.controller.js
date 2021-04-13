// Load the module dependencies
const Patient = require("mongoose").model("Patient");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const jwtExpirySeconds = 300;
const jwtKey = config.secretKey;
const HealthInfo = require("mongoose").model("HealthInfo");
const { ObjectId } = require("mongodb");

// Create a new user
exports.create = function (req, res, next) {
  // Create a new instance of the 'User' Mongoose model
  var patient = new Patient(req.body); //get data from React form
  console.log("body: " + req.body.userName);

  // Use the 'User' instance's 'save' method to save a new user document
  patient.save(function (err) {
    if (err) {
      // Call the next middleware with an error message
      return next(err);
    } else {
      // Use the 'response' object to send a JSON response
      res.json(patient);
    }
  });
};

exports.authenticate = function (req, res, next) {
  // Get credentials from request
  console.log(req.body);
  const userName = req.body.auth.userName;
  const password = req.body.auth.password;
  console.log(password);
  console.log(userName);
  //find the user with given username using static method findOne
  Patient.findOne({ userName: userName }, (err, patient) => {
    if (err) {
      return next(err);
    } else {
      console.log(patient);
      //compare passwords
      if (bcrypt.compareSync(password, patient.password)) {
        // Create a new token with the patient id, username, and firstName in the payload
        // and which expires 300 seconds after issue
        const token = jwt.sign(
          {
            id: patient._id,
            userName: patient.userName,
            firstName: patient.firstName,
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
        res.status(200).send({ screen: patient.firstName });
        //

        req.patient = patient;
        //call the next middleware
        next();
      } else {
        res.json({
          status: "error",
          message: "Invalid username/password!!!",
          data: null,
        });
      }
    }
  });
};
//

//
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
    req.patientUserName = payload.userName;
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      // if the error thrown is because the JWT is unauthorized, return a 401 error
      return res.status(401).end();
    }
    // otherwise, return a bad request error
    return res.status(400).end();
  }
  // user is authenticated
  //call next function in line
  next();
};

exports.list = function (req, res, next) {
  // Use the 'User' instance's 'find' method to retrieve a new user document
  Patient.find({}, function (err, patients) {
      if (err) {
          return next(err);
      } else {
          res.json(patients);
      }
  });
};

exports.patientByID = function (req, res, next, id) {
  Patient.findById(id).populate('patient', 'firstName lastName fullName').exec((err, patient) => {if (err) return next(err);
  if (!patient) return next(new Error('Failed to load course '
          + id));
      req.id = patient._id;
      console.log('in patientById:', req.patient)
      next();
  });
};

exports.read = function (req, res) {
  res.status(200).json(req.patient);
};

exports.healthinfobyPatient = async (req, res, id) => {

  //let courseCode = req.body.auth.courseCode
  //console.log(courseCode);
  console.log(req.id);
  let healthinfos = await HealthInfo.find({patient:ObjectId(req.id)});
  console.log(healthinfos);
  res.status(200).json(healthinfos)
  //try{
  //    var studArray = []
  //    //student.forEach(element => {
  //    //    studArray.push(element)
  //    //});
  //    for(let i = 0; i < student.length; i++){
  //        studArray.push(student[i].student)
  //    }
  //    res.status(200).json(studArray)
  //    
  //}
  //catch(e){
  //    
  //}
};
