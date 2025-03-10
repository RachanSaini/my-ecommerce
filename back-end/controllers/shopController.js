import Shop from "../models/shop.js";

// Add a shop
const addShop = async (req, res) => {
  try {
    const { name, description, location } = req.body;

    // Validate required fields
    if (!name || !description || !location ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const owner = req.owner._id;
    // Create a new shop
    const newShop = new Shop({
      name,
      description,
      location,
      owner,
    });

    // Save the shop to the database
    await newShop.save();

    // Send success response
    res.status(201).json({ message: "Shop created successfully!", shop: newShop });
  } catch (error) {
    console.error("Error creating shop:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Add a product to a shop
const addProductToShop = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const { shopID } = req.params;

    // Validate required fields
    if (!name || !description || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find the shop by ID
    const shop = await Shop.findById(shopID);
    if (!shop) {
      return res.status(404).json({ message: "Shop not found" });
    }

    // Create a new product
    const newProduct = new Product({
      name,
      description,
      price,
      shop: shopID,
    });

    // Save the product to the database
    await newProduct.save();

    // Add the product to the shop's products array
    shop.products.push(newProduct._id);
    await shop.save();

    // Send success response
    res.status(201).json({ message: "Product added successfully!", product: newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all shops
const getAllShops = async (req, res) => {
  try {
    const shops = await Shop.find().populate("products");
    res.status(200).json(shops);
  } catch (error) {
    console.error("Error fetching shops:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get a single shop by ID
const getShopById = async (req, res) => {
  try {
    const { shopId } = req.params;

    // Find the shop by ID and populate its products
    const shop = await Shop.findById(shopId).populate("products");
    if (!shop) {
      return res.status(404).json({ message: "Shop not found" });
    }

    res.status(200).json(shop);
  } catch (error) {
    console.error("Error fetching shop:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { addShop, addProductToShop, getAllShops, getShopById };