const mongoose = require("mongoose");
const { trim } = require("lodash");

const ratingSchema = new mongoose.Schema({
  fx_provider_id: {
    type: String,
    required: true,
    maxlength: 100,
  },
  customer_id: {
    type: String,
    required: true,
    maxlength: 100,
  },
  rating: {
    type: Number,
    required:true,
    max: 5,
  },
});

// TODO : May be prone to error due to "trading-history"
module.exports = mongoose.model("Rating", ratingSchema);
