const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  productID: {
    type: String,
    required: true,
  },
  invoiceID: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('invoiceProduct', dataSchema);