const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const customerSchema = new mongoose.Schema({
  
  customer_name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  customer_country_name:{
    type: String,
    required: true,
  },
  customer_email_address: {
    type: String,
    unique: true,
    required: true,
    maxlength: 500,
  },

  // TODO Username & password to be changed according to stds.
  customer_username: {
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


customerSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

  customerSchema.methods = {
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

module.exports = mongoose.model("Customer", customerSchema);
