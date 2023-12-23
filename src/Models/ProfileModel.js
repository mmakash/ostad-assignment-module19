const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  cus_add: {
    type: String,
    required: true,
  },
  cus_city: {
    type: String,
    required: true,
  },
  cus_country: {
    type: String,
    required: true,
  },
  cus_fax: {
    type: String,
  },
  cus_name: {
    type: String,
    required: true,
  },
  cus_phone: {
    type: String,
    required: true,
  },
  cus_postcode: {
    type: String,
    required: true,
  },
  cus_state: {
    type: String,
    required: true,
  },
  ship_add: {
    type: String,
  },
  ship_city: {
    type: String,
  },
  ship_country: {
    type: String,
  },
  ship_name: {
    type: String,
  },
  ship_phone: {
    type: String,
  },
  ship_postcode: {
    type: String,
  },
  ship_state: {
    type: String,
  },
});

module.exports = mongoose.model('customer', dataSchema);
