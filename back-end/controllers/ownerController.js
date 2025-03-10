import Owner from "../models/owner.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerOwner = async (req, res) => {
  try {
    const { username, email, password, businessName, businessAddress, phoneNumber } = req.body;

    // Check if owner already exists
    const existingOwner = await Owner.findOne({ email });
    if (existingOwner) {
      return res.status(400).json({ message: "Owner already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new owner
    const newOwner = new Owner({
      username,
      email,
      password: hashedPassword,
      businessName,
      businessAddress,
      phoneNumber,
    });

    await newOwner.save();

    // Generate a JWT token
    const token = jwt.sign({ ownerId: newOwner._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "Owner registered successfully!", token });
  } catch (error) {
    console.error("Error registering owner:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginOwner = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the owner by email
      const owner = await Owner.findOne({ email });
      if (!owner) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, owner.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ ownerId: owner._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      res.status(200).json({ message: "Login successful!", token });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Internal server error" });
    }
};

export { registerOwner, loginOwner };