
// TODO : To add middleware to check whether user is FX-provider or not
const jwt = require("jsonwebtoken");
//jwt token
const Currency = require("../../models/currency");

exports.addCurrency = (req, res, next) => {
  const currency = new Currency(req.body);
  currency.save((err, currency) => {
    if (err) {
      return res.status(400).json({
        msg: err,
      });
    }
    res.json({
      msg: "Successfully posted Currency",
      currency_id: currency._id,
    });
  });
};


exports.getAllCurrency = (req, res, next) => {
  
    Currency.find()
    .exec()
    .then((docs) => {
      // console.log("All products", docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log("Error: All Products Error", err);
      res.status(500).json({
        error: err,
      });
    });

};