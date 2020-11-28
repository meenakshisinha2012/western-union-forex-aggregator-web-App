const express = require("express");
const router = express.Router();

const { addTradeHistory, getAllTradeHistory} = require("../controllers/trade-history");

router.post("/add-trade-history", addTradeHistory);
router.get("/get-all-trade-history",getAllTradeHistory);
module.exports = router;
