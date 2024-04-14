const express = require("express");
const Products = require("../models/productsModel");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/search", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/add", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
module.exports = router;