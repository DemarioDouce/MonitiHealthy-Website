const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var MotivationalTips = new Schema({
  message: { type: String, required: "Motivational tip is required" },
  patient: [{ type: Schema.ObjectId, ref: "Patient" }],
});

mongoose.model("MotivationalTips", MotivationalTips);
