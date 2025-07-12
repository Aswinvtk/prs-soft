const mongoose = require('../config/db');


const billSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  rate: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  billDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bill', billSchema);
