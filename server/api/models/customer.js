const mongoose = require("mongoose");
const { trim } = require("lodash");

const customerSchema = new mongoose.Schema({
  customer_id: {
    type: String,
    required: true,
    unique: true,
    maxlength: 20,
  },
  customer_name: {
    type: String,
    required: true,
    maxlength: 100,
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
  customer_password: {
    type: String,
    unique: true,
    required: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
