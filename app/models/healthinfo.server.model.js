const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var HealthInfoSchema = new Schema({
  pulseRate: { type: Number, default: 0 },
  bloodPressure: { type: Number, default: 0 },
  weight: { type: Number, default: 0 },
  temperature: { type: Number, default: 0 },
  respiratoryRate: { type: Number, default: 0 },
  patient: [{ type: Schema.ObjectId, ref: "Patient" }],
});

mongoose.model("HealthInfo", HealthInfoSchema);
