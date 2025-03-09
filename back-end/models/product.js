const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  shop: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true }, // Reference to the shop
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);