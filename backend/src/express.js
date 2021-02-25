const express = require("express");
const { config } = require("dotenv");

//Routers.
const patientRouter = require("./routers/PatientRouter");

//invoking the dotenv config.
config();
const app = express();

const port = process.env.PORT;

app.use(express.json());

//Patient router.
app.use(patientRouter);

app.listen(port, () => {
  console.log("Server is up and running on port " + port + ".");
});
