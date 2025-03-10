import express from "express";
import {
  addShop,
  addProductToShop,
  getAllShops,
  getShopById,
} from "../controllers/shopController.js";
import ownerAuthMiddleware from "../middleware/ownerAuthMiddleware.js";

const router = express.Router();

// Add a shop
router.post("/", ownerAuthMiddleware, addShop);

// Add a product to a shop
router.post("/:shopID/products", ownerAuthMiddleware, addProductToShop);

// Get all shops
router.get("/", getAllShops);

// Get a single shop by ID
router.get("/:shopId", getShopById);

export default router;