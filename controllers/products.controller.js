const productService = require("../services/products.services");
const categoriesServices = require ('../services/categories.services');

module.exports = {
  getAll: async (req, res, next) => {
    const category = req.query.category;
    const productName = req.query.name;

    if (!category) {
      try {
        const allProducts = await productService.getAll(productName);
        res.json(allProducts);
      } catch (err) {
        next(err);
      }
    } else {
      try {
        const productByCategory = await productService.getByCategory(category);
        res.send(productByCategory);
      } catch (err) {
        next(err);
      }
    }
  },
  getById: async (req, res, next) => {
    const idProduct = req.params.id;
    try {
      const product = await productService.getById(idProduct);
      res.send(product);
    } catch (err) {
      next(err);
    }
  },
  addProduct: async (req, res, next) => {
      const category = req.body.category;
      if(!category) return res.status(400).json({message: 'Bad Request: category id is needed'});
    try {
      const newProduct = await productService.addProduct(req.body);
      const productCategory = await categoriesServices.getById(category.id)
      newProduct.setCategories(productCategory);
      res.status(201).json(newProduct);
    } catch (err) {
      next(err);
    }
  },
  deleteProduct: async (req, res, next) => {
    const idProduct = req.params.id;
    try {
      const deleteProduct = await productService.deleteProduct(idProduct);
      res.sendStatus(200).send(deleteProduct);
    } catch (err) {
      next(err);
    }
  },
  updateProduct: async (req, res, next) => {
    const idProduct = req.params.id;
    const data = req.body;
    try {
      const updateProduct = await productService.updateProduct(idProduct, data);
      res.status(202).json(updateProduct);
    } catch (err) {
      next(err);
    }
  },
};

//RECIBE DATOS DE LA DB, DECIDE QUE HACER CON ELLOS.
