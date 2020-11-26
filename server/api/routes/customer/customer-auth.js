const express = require("express");
const router = express.Router();

const { cust_signout, cust_login, cust_signup } = require("../../controllers/customer/customer-auth");

router.post("/signup", cust_signup);
router.post("/login", cust_login);
router.post("/signout", cust_signout);

module.exports = router;
