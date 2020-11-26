const mongoose = require("mongoose");

const fxRateSchema = new mongoose.Schema({
  fx_provider_id: {
    type: String,
    required: true,
  },
  currency_from: {
    type: String,
    required: true,
    maxlength: 3,
  },
  currency_to: {
    type: String,
    required: true,
    maxlength: 3,
  },
  buy_rate: {
    type: Number,
    required: true,
  },
  average_buy_rate: {
    type: Number,
    required: true,
  },
  per_change_buy_rate: {
    type: Number,
    required: true,
  },
  sell_rate: {
    type: Number,
    required: true,
  },
  average_sell_rate: {
    type: Number,
    required: true,
  },
  per_change_sell_rate: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Fx-Rate", fxRateSchema);
