
// TODO : To add middleware to check whether user is FX-provider or not
const jwt = require("jsonwebtoken");
//jwt token
const TradeHistory = require("../models/trading-history");

exports.addTradeHistory = (req, res, next) => {
  const tradeHistory = new TradeHistory(req.body);
  tradeHistory.save((err, tradeHistory) => {
    if (err) {
      return res.status(400).json({
        msg: err,
      });
    }
    res.json({
      msg: "Successfully posted Trade History",
      tradeHistoryId: tradeHistory._id,
    });
  });
};


exports.getAllTradeHistory = (req, res, next) => {
  
    TradeHistory.find()
    .exec()
    .then((docs) => {
      // console.log("All products", docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log("Error: Cannot fetch trade history", err);
      res.status(500).json({
        error: err,
      });
    });

};

exports.getCustomerTradeHistory = (req, res, next) => {
    const customerId = req.params.customerId;
    TradeHistory.find({customer_id : customerId})
    .exec()
    .then((docs) => {
      // console.log("All products", docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log("Error: Cannot fetch trade history", err);
      res.status(500).json({
        error: err,
      });
    });

};

exports.getFxTradeHistory = (req, res, next) => {
    const fxId = req.params.fxId;
    TradeHistory.find({fx_provider_id : fxId})
    .exec()
    .then((docs) => {
      // console.log("All products", docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log("Error: Cannot fetch trade history", err);
      res.status(500).json({
        error: err,
      });
    });

};