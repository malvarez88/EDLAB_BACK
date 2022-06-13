const express = require("express");
const router = express.Router();
const brandsController = require("../controllers/brands.controller");
const authJwt = require("../middleware/authjwt")

router.post("/add",brandsController.addBrand)

module.exports = router;