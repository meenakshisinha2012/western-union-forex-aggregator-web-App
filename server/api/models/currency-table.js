const mongoose = require("mongoose");
const { trim } = require("lodash");

const currencySchema = new mongoose.Schema({
  currency_id: {
    type: String,
    required: true,
    maxlength: 100,
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
});

// TODO : May be prone to error due to "trading-history"
module.exports = mongoose.model("Currency-Table", currencySchema);
