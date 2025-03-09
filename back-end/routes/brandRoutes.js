const express = require("express");
const { registerBrand } = require("../controllers/brandController");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/register-brand", upload.fields([
  { name: "businessLicense", maxCount: 1 },
  { name: "taxId", maxCount: 1 },
]), registerBrand);

module.exports = router;