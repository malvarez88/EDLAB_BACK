const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');

router.get('/', productsController.getAll)
router.get('/:id', productsController.getById)
router.post('/addproduct', productsController.addProduct)
router.delete('/:id', productsController.deleteProduct)
router.put('/:id', productsController.updateProduct)

module.exports = router;




