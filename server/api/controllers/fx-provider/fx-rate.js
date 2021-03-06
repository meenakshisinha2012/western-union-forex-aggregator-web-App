//const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const forexRate = require("../../models/forex-rate");
const data = require("../../../uploads/provider1.json");

exports.add_fx_rate = (req, res, next) => {
  const fxRate = new forexRate(req.body);
  console.log("Data", data);

  fxRate.save((err, fxRate) => {
    if (err) {
      return res.status(400).json({
        msg: err,
      });
    }
    res.json({
      errormsg: "Fx-rate added successfully",err
    });
  });
};

exports.getFxProvider = async (req, res, next) => {
  const from = req.params.currencyFrom;
  const to = req.params.currencyTo;
  const mysort = { timestamp: -1 };
  let forexProviderRates = [];
  try {
    const result1 = await forexRate
      .find({ currency_from: from, currency_to: to })
      .distinct("fx_provider_id")
      .exec();
  } catch (error) {}

  console.log("result1", result1);

  forexRate
    .find({ currency_from: from, currency_to: to })
    .distinct("fx_provider_id")
    .exec()
    .then((result) => {
      // console.log("Forex Provides Found ");
      // res.status(200).json(result);
      console.log("IDS:", result);

      for (i = 0; i < result.length; i++) {
        console.log(i, result[i]);
        forexRate
          .find({ fx_provider_id: result[i] })
          .sort(mysort)
          .limit(1)
          .exec()
          .then((docs) => {
            forexProviderRates.push({ docs });
            console.log("Doc Result", i, docs);
          })
          .catch((err) => {
            console.log("Cannot find fx-providers", err);
            res.status(500).json(err);
          });
      }
      console.log(forexProviderRates);
      console.log("I am ");
      res.status(200).json(forexProviderRates);
    })
    .catch((err) => {
      console.log("Cannot find fx-providers", err);
      res.status(500).json(err);
    });
};

exports.getFxProviderRates = (req, res, next) => {
  const id = req.params.fxProviderId;
  forexRate
    .find({ currency_from: from, currency_to: to })
    .exec()
    .then((result) => {
      console.log("Forex Provides Found ");
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log("Cannot find fx-providers", err);
      res.status(500).json({errormsg:"Cannot find fx-providers",err});
    });
};

exports.getFxProviderFilterBuyRateDesc = (req, res, next) => {
  const from = req.params.currencyFrom;
  const to = req.params.currencyTo;

  const mysort = { buy_rate: -1 };

  forexRate
    .find({ currency_from: from, currency_to: to })
    .sort(mysort)
    .exec()
    .then((result) => {
      console.log("Forex Provides Found ");
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log("Cannot find fx-providers", err);
      res.status(500).json({errmsg:"Cannot find fx-providers",err});
    });
};

exports.getFxProviderFilterSellRateDesc = (req, res, next) => {
  console.log("Data", data);
  const from = req.params.currencyFrom;
  const to = req.params.currencyTo;

  const mysort = { sell_rate: -1 };

  forexRate
    .find({ currency_from: from, currency_to: to })
    .sort(mysort)
    .exec()
    .then((result) => {
      console.log("Forex Provides Found ");
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log("Cannot find fx-providers", err);
      res.status(500).json(err);
    });
};
