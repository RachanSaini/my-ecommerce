import express from "express";
import {
  addShop,
  addProductToShop,
  getAllShops,
  getShopById,
} from "../controllers/shopController.js";

const router = express.Router();

// Add a shop
router.post("/", addShop);

// Add a product to a shop
router.post("/:shopID/products", addProductToShop);

// Get all shops
router.get("/", getAllShops);

// Get a single shop by ID
router.get("/:shopId", getShopById);

export default router;