const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const FxProvider = require("../../models/fx-provider");

exports.fx_signup = (req, res, next) => {
  const fxProvider = new FxProvider(req.body);
  fxProvider.save((err, fxProvider) => {
    if (err) {
      return res.status(400).json({
        msg: err,
      });
    }

    res.json({
      fx_username: fxProvider.fx_provider_username,
      email: fxProvider.fx_provider_email_address,
      id: fxProvider._id,
    });
  });
};

exports.fx_login = (req, res, next) => {
  const { fx_provider_username, password } = req.body;
  FxProvider.findOne({ fx_provider_username }, (err, fxProvider) => {
    if (err || !fxProvider) {
      return res.status(400).json({
        error: "User email does not exist",
      });
    }

    if (!fxProvider.authenticate(password)) {
      return res.status(400).json({
        error: "Username and Password does not match",
      });
    }

    //create token
    const token = jwt.sign({ _id: fxProvider._id }, process.env.SECRET);
    //put this token in users browser cookie
    res.cookie("token", token, { expire: new Date() + 999 });
    //send responce to front end
    const { _id, fx_provider_company_name, fx_provider_email_address } = fxProvider;
    return res.json({ token, fxProvider: { _id, fx_provider_company_name,fx_provider_email_address } });
  });
};

exports.fx_signout = (req, res, next) => {
  res.clearCookie("token")
    res.json({
        message: "Fx-Provider Sign Out successfully"
    });
};
