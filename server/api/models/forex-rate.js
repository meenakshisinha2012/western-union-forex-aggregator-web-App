const mongoose = require("mongoose");

const fxRateSchema = new mongoose.Schema({
  fx_provider_id: {
    type: String,
    required: true,
    unique: true,
    maxlength: 20,
  },
  currency_id: {
    type: String,
    required: true,
    maxlength: 100,
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

//TODO May be prone to error due to "fx-rate"
module.exports = mongoose.model("Fx-Rate", fxRateSchema);
