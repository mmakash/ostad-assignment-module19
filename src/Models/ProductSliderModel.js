const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  productID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('productSlider', dataSchema);
