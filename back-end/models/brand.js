const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brandName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  businessAddress: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  agreeToTerms: { type: Boolean, required: true },
});

module.exports = mongoose.model("Brand", brandSchema);