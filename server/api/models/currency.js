const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema({
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
module.exports = mongoose.model("Currency", currencySchema);
