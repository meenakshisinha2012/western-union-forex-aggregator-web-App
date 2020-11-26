const mongoose = require("mongoose");
const { trim } = require("lodash");

const tradingHistorySchema = new mongoose.Schema({
  customer_id: {
    type: String,
    required: true,
    unique: true,
    maxlength: 20,
  },
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
  buy_amount: {
    type: Number,
    required: true,
  },
  sell_amount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
});

// TODO : May be prone to error due to "trading-history"
module.exports = mongoose.model("Trading-History", tradingHistorySchema);
