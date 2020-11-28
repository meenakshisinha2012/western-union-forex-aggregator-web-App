const mongoose = require("mongoose");

const tradingHistorySchema = new mongoose.Schema({
  customer_id: {
    type: String,
    required: true,
    
  },
  fx_provider_id: {
    type: String,
    required: true,

  },
  currency_from: {
    type: String,
    required: true,
    maxlength: 100,
  },
  currency_to: {
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
  tradingTimestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model("Trading-History", tradingHistorySchema);
