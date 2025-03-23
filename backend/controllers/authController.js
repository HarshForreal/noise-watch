import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const register = async (req, res) => {
  const { email, username, password, area, subArea } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      username,
      password: hashedPassword,
      area,
      subArea,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering user" }, err);
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({
      message: "Login successful",
      user: {
        username: user.username,
        name: user.username,
        area: user.area,
        subArea: user.subArea,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Error logging in" }, err);
  }
};
