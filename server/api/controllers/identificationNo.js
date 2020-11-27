//const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const identificationNoList = require("../models/identification-no-list");

// exports.addNewFxProvider = (req, res, next) => {
//   const idNoList = new identificationNoList(req.body);
//   idNoList.save((err, idNoList) => {
//     if (err) {
//       return res.status(400).json({
//         msg: err,
//       });
//     }
//     res.json({
//       msg: "Fx-provider-id genertated successfully",
//       _id : idNoList._id
//     });
//   });
// };

exports.isValidFXProvider = (req, res, next) => {
  const id = req.params.IdNo;

  identificationNoList
    .find({ _id: id })
    .exec()
    .then(() => {
      next();
    })
    .catch((err) => {
      res.status(403).json({error: "You are not a valid Forex-Provider.",err});
    });
};

