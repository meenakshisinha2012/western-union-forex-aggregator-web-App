const express = require("express");
const router = express.Router();

const {
  addTradeHistory,
  getAllTradeHistory,
  getCustomerTradeHistory,
  getFxTradeHistory,
  getRecentCustTradeHistory,
  getRecentFxTradeHistory,
} = require("../controllers/trade-history");

router.post("/add-trade-history", addTradeHistory);
router.get("/get-all-trade-history", getAllTradeHistory);
router.get("/get-customer-trade-history/:customerId", getCustomerTradeHistory);
router.get("/get-fx-trade-history/:fxId", getFxTradeHistory);
router.get(
  "/get-recent-cust-trade-history/:customerId",
  getRecentCustTradeHistory
);
router.get("/get-recent-fx-trade-history/:fxId", getRecentFxTradeHistory);

module.exports = router;
