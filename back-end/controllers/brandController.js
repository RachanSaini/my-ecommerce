import Brand from "../models/brand.js";

const registerBrand = async (req, res) => {
  try {
    const { brandName, email, password, businessAddress, phoneNumber, agreeToTerms } = req.body;

    // Validate required fields
    if (!brandName || !email || !password || !businessAddress || !phoneNumber || !agreeToTerms) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBrand = new Brand({
      brandName,
      email,
      password,
      businessAddress,
      phoneNumber,
      agreeToTerms,
    });

    await newBrand.save();
    res.status(201).json({ message: "Brand registered successfully!" });
  } catch (error) {
    console.error("Error registering brand:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { registerBrand };