const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories.controller');

router.get('/', categoriesController.getAll)
router.get('/:id', categoriesController.getById)
router.post('/addcategory', categoriesController.addCategory)
router.delete('/:id', categoriesController.deleteCategory)
router.put('/:id', categoriesController.updateCategory)


module.exports = router;


