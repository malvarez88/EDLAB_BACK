const productService = require("../services/products.services");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const allProducts = await productService.getAll();
      res.send(allProducts);
    } catch (err) {
      next(err);
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
    try {
      const newProduct = await productService.addProduct(req.body);
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
        const updateProduct = await productService.updateProduct(idProduct, data)
        res.status(202).json(updateProduct)
    } catch (err) {
      next(err);
    }
  },
};

//RECIBE DATOS DE LA DB, DECIDE QUE HACER CON ELLOS.
