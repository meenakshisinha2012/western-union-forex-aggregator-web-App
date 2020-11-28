const express = require("express");
const router = express.Router();

const { addTradeHistory, getAllTradeHistory,getCustomerTradeHistory,getFxTradeHistory} = require("../controllers/trade-history");

router.post("/add-trade-history", addTradeHistory);
router.get("/get-all-trade-history",getAllTradeHistory);
router.get("/get-customer-trade-history/:customerId",getCustomerTradeHistory);
router.get("/get-fx-trade-history/:fxId",getFxTradeHistory);
module.exports = router;
