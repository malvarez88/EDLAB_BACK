const productService = require("../services/products.services");
const categoriesServices = require ('../services/categories.services');
const brandServices = require("../services/brands.services")

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
      const brand = req.body.brand;
      if(!category) return res.status(400).json({message: 'Bad Request: category is needed'});
      if(!brand) return res.status(400).json({message: 'Bad Request: brand is needed'});
    try {
      const productCategory = await categoriesServices.getByName(category)  
      const productBrand = await brandServices.getByName(brand) 
      const newProduct = await productService.addProduct(req.body)
      newProduct.setCategories(productCategory)
      const nose = await newProduct.setBrand(productBrand)
      res.status(201).json(newProduct)
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
