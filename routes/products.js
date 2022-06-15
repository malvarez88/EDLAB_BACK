const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");
const authJwt = require("../middleware/authjwt")

router.get("/", productsController.getAll)
router.get("/:id", productsController.getById)
router.post("/add",productsController.addProduct)
router.delete("/:id",authJwt.verifyToken,productsController.deleteProduct)
router.put("/:id",authJwt.verifyToken,productsController.updateProduct)
router.post("/:id/review",authJwt.verifyToken,productsController.addReview)
router.get("/:id/review",productsController.getReviews)

module.exports = router;

