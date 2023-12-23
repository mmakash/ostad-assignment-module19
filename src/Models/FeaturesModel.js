const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true
  }
},
{timestamps: true,versionKey: false}
);

module.exports = mongoose.model('features',dataSchema)