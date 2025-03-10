import express from "express";
import { registerOwner, loginOwner } from "../controllers/ownerController.js";

const router = express.Router();

// Register a new owner
router.post("/register", registerOwner);

// Login an owner
router.post("/login", loginOwner);

export default router;