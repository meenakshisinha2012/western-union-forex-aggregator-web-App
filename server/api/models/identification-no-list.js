const mongoose = require("mongoose");

const identificationNoSchema = new mongoose.Schema({
  
    isVerified: {
    type: Boolean,
    required:true,
    default: false,
  },
});

module.exports = mongoose.model("Identification-No", identificationNoSchema);
