import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: "User already exists." });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({ firstName, lastName, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
});

// LOGIN ROUTE

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    // Return token and user data
    res.status(200).json({ token, user: { id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// for fetching the current user

router.get("/me", async (req, res) => {
    try {
      const token = req.header("Authorization")?.replace("Bearer ", "");
      if (!token) return res.status(401).json({ message: "No token, authorization denied" });
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");
      if (!user) return res.status(404).json({ message: "User not found" });
      
      res.status(200).json({ user });
    } catch (error) {
      console.error("Get user error:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  
export default router;
