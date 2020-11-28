const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");
const fxProviderSchema = new mongoose.Schema({
  
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
  fx_exchange_currency:{
    type: Array,
    default: [],
  },
  fx_identification_no:{
    type: String,
    required: true
  },
  fx_provider_username: {
    type: String,
    unique: true,
    required: true,
  },
  salt:String,
  encry_password: {
    type: String,
    required: true,
  },
});


fxProviderSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

  fxProviderSchema.methods = {
  authenticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },
  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

// TODO : May be prone to error due to "fx-provider"
module.exports = mongoose.model("Fx-Provider", fxProviderSchema);
