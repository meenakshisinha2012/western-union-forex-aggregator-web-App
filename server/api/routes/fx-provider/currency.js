const express = require("express");
const { addCurrency,getAllCurrency } = require("../../controllers/fx-provider/currency");
const router = express.Router();

router.post("/add-currency", addCurrency);
router.get("/get-all-currency",getAllCurrency);
module.exports = router;
