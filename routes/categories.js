const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories.controller');
const authJwt = require('../middleware/authjwt')

router.get('/', categoriesController.getAll)
router.get('/:id', categoriesController.getById)
router.post('/addcategory',authJwt.verifyToken, categoriesController.addCategory)
router.delete('/:id',authJwt.verifyToken, categoriesController.deleteCategory)
router.put('/:id',authJwt.verifyToken, categoriesController.updateCategory)

module.exports = router;


