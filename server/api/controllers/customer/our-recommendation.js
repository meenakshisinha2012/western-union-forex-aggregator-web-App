const jwt = require("jsonwebtoken");
//jwt token
const FxRates = require("../../models/forex-rate");
const Rating = require("../../models/rating");

// function getMaxRating(){
//   const fxId;
//   const mysort = {rating : -1};

//   Rating.find().sort(mysort).limit(1).exec().then((result) => {
//     fxId = result.fx_provider_id ;
//     console.log('result', result);
//     console.log('fxId', fxId);

//   }).catch((err) => {
//     console.log("Cannot findt!!!", err);
//       res.status(500).json(err);
//   });
//   return fxId;
// }

// exports.getOurRecommendation = (req, res, next) => {
//   const from = req.params.currencyFrom;
//   const to = req.params.currencyTo;
//   const mysort = {rating : -1};

//   FxRates.find({ currency_from: from, currency_to: to })
//     .exec()
//     .then((result) => {
           
//     })
//     .catch((err) => {
//       console.log("Cannot delete the product!!!", err);
//       res.status(500).json(err);
//     });
// };
