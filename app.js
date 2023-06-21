const express = require("express");
// const morgan = require('morgan');
const router = require("./routes/gift-exchange");
const NotFoundError = require("./utils/errors");
const ExpressError = require("./utils/errors");
const app = express();

// app.use(morgan("tiny"))
app.use(express.json());
app.use(`/gift-exchange`, router);

app.get("/", (req, res) => {
  res.send("hello");
});
app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  const status = error?.status || 500;
  console.log(error.message)
  const message = error.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
