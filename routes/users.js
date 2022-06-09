const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users.controller.js");
const authJwt = require("../middleware/authjwt")


/* GET users listing. */
router.post('/register', usersController.register);
router.post('/login',authJwt.logIn)
router.post('/add', usersController.addToCart)



module.exports = router;
