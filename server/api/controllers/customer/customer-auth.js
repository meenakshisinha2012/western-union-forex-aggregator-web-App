const jwt = require("jsonwebtoken");

const Customer = require("../../models/customer");

exports.cust_signup = (req, res, next) => {
  const customer = new Customer(req.body);
  customer.save((err, customer) => {
    if (err) {
      return res.status(400).json({
        msg: err,
      });
    }

    res.json({
      customer_username: customer.customer_username,
      email: customer.customer_email_address,
      id: customer._id,
    });
  });
};

exports.cust_login = (req, res, next) => {
  const { customer_username, password } = req.body;
  Customer.findOne({ customer_username }, (err, customer) => {
    if (err || !customer) {
      return res.status(400).json({
        error: "User email does not exist",
      });
    }

    if (!customer.authenticate(password)) {
      return res.status(400).json({
        error: "Username and Password does not match",
      });
    }

    //create token
    const token = jwt.sign({ _id: customer._id }, process.env.SECRET);
    //put this token in users browser cookie
    res.cookie("token", token, { expire: new Date() + 999 });
    //send responce to front end
    const { _id, customer_name, customer_email_address } = customer;
    return res.json({ token, customer: { _id, customer_name,customer_email_address } });
  });
};

exports.cust_signout = (req, res, next) => {
  res.clearCookie("token")
  res.json({
      message: "Customer Sign Out successfully"
  });
};

