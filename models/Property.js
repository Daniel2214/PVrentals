const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  period: {
    type: String,
  },
  fbLink: {
    type: String,
  },
  description: {
    type: [String],
  },
  images: {
    type: [String],
  },
});

module.exports = Property = mongoose.model("property", PropertySchema);
