const Brand = require("../models/brand");

const registerBrand = async (req, res) => {
  try {
    const { brandName, email, password, businessAddress, phoneNumber, agreeToTerms } = req.body;
    const businessLicense = req.files["businessLicense"][0].path;
    const taxId = req.files["taxId"][0].path;

    const newBrand = new Brand({
      brandName,
      email,
      password,
      businessAddress,
      phoneNumber,
      businessLicense,
      taxId,
      agreeToTerms,
    });

    await newBrand.save();
    res.status(201).json({ message: "Brand registered successfully!" });
  } catch (error) {
    console.error("Error registering brand:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { registerBrand };