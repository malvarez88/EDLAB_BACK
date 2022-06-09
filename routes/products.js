const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller');
const authJwt = require("../middleware/authjwt")

router.get('/', productsController.getAll)
router.get('/:id', productsController.getById)
router.post('/add',authJwt.verifyToken,productsController.addProduct)
router.delete('/:id',authJwt.verifyToken,productsController.deleteProduct)
router.put('/:id',authJwt.verifyToken,productsController.updateProduct)


module.exports = router;




//query categorias!!!! 
// pregunto si viene en el query una categoria, si no viene, devuelvo todos los productos.
//si viene, tengo que chequear que productos pertenecen a esa categoria.