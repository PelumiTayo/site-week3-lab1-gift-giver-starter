const express = require("express");
const GiftExchange = require("../models/gift-exchange");
const router = express.Router();

router.post("/pairs", (req, res) => {
  try {
    if (!req.body?.names)
      return next(new BadRequestError("Must provide a names array."));
    const result = GiftExchange.pairs(req.body.names);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

router.post("/traditional", async (req, res) => {
  try {
    if (!req.body?.names)
      return next(new BadRequestError("Must provide a names array."));
    const result = GiftExchange.traditional(req.body.names);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
