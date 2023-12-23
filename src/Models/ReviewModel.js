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
  des: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

module.exports = mongoose.model('review', dataSchema);
