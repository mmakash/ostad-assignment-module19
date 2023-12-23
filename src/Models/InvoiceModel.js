const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  payable: {
    type: Number,
    required: true,
  },
  cus_details: {
    type: String, 
    required: true,
  },
  ship_details: {
    type: String, 
    required: true,
  },
  tran_id: {
    type: String,
    required: true,
  },
  val_id: {
    type: String,
    required: true,
  },
  payment_status: {
    type: String,
    enum: ['pending', 'completed', 'failed'], 
    default: 'pending',
  },
  delivery_status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
    default: 'pending',
  },
  total: {
    type: Number,
    required: true,
  },
  vat: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('invoice', dataSchema);
