const express = require('express');
const router = express.Router();
const productsRouter = require ('./products');
const usersRouter = require('./users');
const authJwt = require("../middleware/authjwt")

router.use('/products',authJwt.verifyToken,productsRouter)
router.use('/users', usersRouter)

module.exports = router;
