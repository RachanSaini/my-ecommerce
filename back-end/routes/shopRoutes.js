import express from "express";
import {
  addShop,
  addProductToShop,
  getProductsByShop,
  getAllShops,
  getShopById,
  getShopsByOwner,
} from "../controllers/shopController.js";
import ownerAuthMiddleware from "../middleware/ownerAuthMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Add a shop
router.post("/", ownerAuthMiddleware, addShop);

// Add a product to a shop
router.post("/:shopID/products", upload , addProductToShop);

//Get all products to a shop
router.get("/:shopID/products", getProductsByShop);

// Get all shops
router.get("/", getAllShops);

// Get a single shop by ID
router.get("/:shopId", getShopById);

//Get all shops for the logged owner
router.get("/", getShopsByOwner);

export default router;