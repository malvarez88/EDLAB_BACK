const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categories.controller");
const authJwt = require("../middleware/authjwt")

router.get("/", categoriesController.getAll)
router.get("/:id", categoriesController.getById)
router.post("/add", categoriesController.addCategory)
router.delete("/:id", categoriesController.deleteCategory)
router.put("/:id", categoriesController.updateCategory)

module.exports = router;


