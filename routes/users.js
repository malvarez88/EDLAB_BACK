const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users.controller.js");

/* GET users listing. */
router.post('/register', usersController.register);

module.exports = router;
