const mongoose = require("mongoose");

const OtpSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  expiresAt: { type: Date, default: () => new Date(Date.now() + 5 * 60000) }, // Expires in 5 mins
});

module.exports = mongoose.model("Otp", OtpSchema);
