const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var HealthInfoSchema = new Schema({
  pulseRate: { type: Number, default: 0 },
  bloodPressure: { type: String },
  weight: { type: Number, default: 0 },
  temperature: { type: Number, default: 0 },
  respiratoryRate: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  patient: [{ type: Schema.ObjectId, ref: "Patient" }],
});

mongoose.model("HealthInfo", HealthInfoSchema);
