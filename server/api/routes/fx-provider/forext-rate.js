const express = require("express");
const router = express.Router();

const { add_fx_rate, getFxProvider,getFxProviderFilterSellRateDesc,getFxProviderFilterBuyRateDesc } = require("../../controllers/fx-provider/fx-rate");

router.post("/add-fx-rate", add_fx_rate);
router.get("/get-fx-provider/:currencyFrom/:currencyTo",getFxProvider );
router.get("/get-fx-provider-filter-buy-rate-desc/:currencyFrom/:currencyTo", getFxProviderFilterBuyRateDesc );
router.get("/get-fx-provider-filter-sell-rate-desc/:currencyFrom/:currencyTo", getFxProviderFilterSellRateDesc );

module.exports = router;
