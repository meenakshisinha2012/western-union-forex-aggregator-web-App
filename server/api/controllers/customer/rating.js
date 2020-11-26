const jwt = require("jsonwebtoken");
//jwt token
const Rating = require("../../models/rating");

exports.addRating = (req, res, next) => {
  const rating = new req.body();
  rating.save((err, rating) => {
    if (err) {
      return res.status(400).json({
        msg: err,
      });
    }
    res.json({
      msg: "Successfully posted Rating",
      rating_id: rating._id,
    });
  });
};
