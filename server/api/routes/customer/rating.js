const express = require("express");
const { addRating } = require("../../controllers/customer/rating");
const router = express.Router();

router.post("/create", addRating);

module.exports = router;
