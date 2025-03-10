import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import brandRoutes from "./routes/brandRegistrationRoutes.js";
import shopRoutes from './routes/shopRoutes.js';
import ownerRoutes from './routes/ownerRoutes.js';


// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api/shop-registration", brandRoutes);
app.use("/api/shops", shopRoutes);
app.use("/api/owners", ownerRoutes);

app.get("/api/health", (req, res) => {
    res.status(200).json({ message: "Backend server is healthy and running!" });
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong on the server!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});