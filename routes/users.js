const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller.js");
const authJwt = require("../middleware/authjwt")

router.post("/register",usersController.register);
router.post("/login",authJwt.logIn)

router.post("/add",authJwt.verifyToken,usersController.addToCart)
router.post("/remove",authJwt.verifyToken,usersController.deleteFromCart)
router.post("/buy",authJwt.verifyToken,usersController.buyConfirm)

module.exports = router;
