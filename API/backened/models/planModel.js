const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ["free", "pro"],
    required: true
  },
  apiLimit: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  available: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("Plan", planSchema);