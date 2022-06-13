const express = require("express");
const router = express.Router();
const productsRouter = require ("./products");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");
const brandsRouter = require("./brands")

router.use("/products",productsRouter)
router.use("/users", usersRouter)
router.use("/categories", categoriesRouter)
router.use("/brands",brandsRouter)

module.exports = router;
