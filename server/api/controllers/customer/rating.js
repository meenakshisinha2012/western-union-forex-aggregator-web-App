const jwt = require("jsonwebtoken");
//jwt token
const Rating = require("../../models/rating");

exports.addRating = (req, res, next) => {
  const rating = new Rating(req.body);
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


exports.getRatings = (req, res, next) => {
  
  const id = req.params.fxProviderId;
  Rating
    .find({ fx_provider_id: id })
    .exec()
    .then((result) => {
      console.log("Product sucessfully with ID ", id);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log("Cannot delete the product!!!", err);
      res.status(500).json(err);
    });
};