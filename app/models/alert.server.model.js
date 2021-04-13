const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var AlertSchema = new Schema({
  message: { type: String, required: "Alert Message is required" },
  //Im assuming by saving this alert,
  //the default value will be automatically saved to whatever time the user sent the alert - KEN
  date: { type: Date, default: Date.now },
  patient: [{ type: Schema.ObjectId, ref: "Patient" }],
});

mongoose.model("Alert", AlertSchema);
