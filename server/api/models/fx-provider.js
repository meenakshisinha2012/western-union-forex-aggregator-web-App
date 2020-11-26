const mongoose = require("mongoose");
const { trim } = require("lodash");

const fxProviderSchema = new mongoose.Schema({
  fx_provider_id: {
    type: String,
    required: true,
    unique: true,
    maxlength: 20,
  },
  fx_provider_name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  fx_provider_company_name: {
    type: String,
    unique: true,
    required: true,
    maxlength: 500,
  },
  fx_provider_email_address: {
    type: String,
    unique: true,
    required: true,
    maxlength: 500,
  },
  fx_brokrage_rate: {
    type: Number,
    required: true,
  },
  //TODO: how to add arrray 
  fx_exchange_currency:{

  },
  
  // TODO Username & password to be changed according to stds.
  fx_provider_username: {
    type: String,
    unique: true,
    required: true,
  },
  fx_provider_password: {
    type: String,
    unique: true,
    required: true,
  },
});

// TODO : May be prone to error due to "fx-provider"
module.exports = mongoose.model("Fx-Provider", fxProviderSchema);
