const express = require("express");
const { getProduct, getProducttById } = require("../controllers/product.controller");
const router = express();

router.get("/", getProduct);
router.get("/:id", getProducttById);

module.exports = router;
