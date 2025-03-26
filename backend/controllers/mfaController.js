const Otp = require("../models/Otp");
const generateOtp = require("../utils/generateOtp");
const nodemailer = require("nodemailer");

// Configure Email Transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send OTP
exports.sendOtp = async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();

  await Otp.create({ email, otp });

  // Send OTP via email
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your MFA OTP Code",
    text: `Your OTP is: ${otp}`,
  });

  res.json({ message: "OTP sent" });
};

// Verify OTP
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const validOtp = await Otp.findOne({ email, otp });

  if (!validOtp || new Date() > validOtp.expiresAt) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  await Otp.deleteOne({ email });

  res.json({ message: "OTP verified successfully" });
};
