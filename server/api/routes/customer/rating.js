const express = require("express");
const { addRating,getRatings } = require("../../controllers/customer/rating");
const router = express.Router();

router.post("/create", addRating);
router.get("/get-rating/:fxProviderId",getRatings);
module.exports = router;
