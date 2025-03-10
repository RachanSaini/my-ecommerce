import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  businessName: { type: String, required: true }, // Optional: Add business-specific fields
  businessAddress: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Owner", ownerSchema);