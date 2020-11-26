require("dotenv").config();

const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const fxProviderRoutes = require("./api/routes/fx-provider/fx-auth");
const customerRoutes = require("./api/routes/customer/customer-auth");
const ratingRoutes = require("./api/routes/customer/rating");
const forexRateRoutes = require("./api/routes/fx-provider/forext-rate");

mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(console.log("DB Connected"));

mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use("/fx-provider", fxProviderRoutes);
app.use("/customer", customerRoutes);
app.use("/rating", ratingRoutes);
app.use("/forex-rate", forexRateRoutes);

module.exports = app;
