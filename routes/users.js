const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller.js");
const authJwt = require("../middleware/authjwt")

router.post("/register",usersController.register);
router.post("/login",authJwt.logIn)

module.exports = router;
