const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('wishlist', dataSchema);