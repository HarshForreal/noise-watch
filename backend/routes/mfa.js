import express from "express";

const mfaRoutes = express.Router();

// Define your MFA routes
mfaRoutes.post("/send-otp", (req, res) => {
  res.json({ message: "OTP sent" });
});

mfaRoutes.post("/verify-otp", (req, res) => {
  res.json({ message: "OTP verified" });
});

export default mfaRoutes;  // ✅ Default export
