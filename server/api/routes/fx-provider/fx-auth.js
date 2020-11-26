const express = require("express");
const router = express.Router();

const { fx_signout, fx_login, fx_signup } = require("../../controllers/fx-provider/fx-auth");

router.post("/signup", fx_signup);
router.post("/login", fx_login);
router.post("/signout", fx_signout);

module.exports = router;
