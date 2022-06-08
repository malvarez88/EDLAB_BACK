const Product = require("../models/Product.model");

module.exports = {
  getAll: async () => {
    try {
      const allProducts = await Product.findAll();
      return allProducts;
    } catch (err) {
      console.error(err);
    }
  },
  getById: async (id) => {
    try {
      const idProduct = await Product.findOne({
        where: {
          id,
        },
      });
      return idProduct;
    } catch (err) {
      console.error(err);
    }
  },
  addProduct: async (newProduct) => {
    try {
      const productCreated = await Product.create(newProduct);
      return productCreated;
    } catch (err) {
      console.error(err);
    }
  },
  deleteProduct: async (id) => {
    try {
      const deletedProduct = await Product.destroy({
        where : {
          id,
        }
      })
      return deletedProduct;
    } catch (err) {
      console.error(err)
    }
  },
  updateProduct: async (id, data) => {
    try {
      const updatedProduct = await Product.update(data,
        {
        where: { id },
        returning: true,
        plain: true
      }
      )
      return updatedProduct[1];
    } catch (err) {
      console.log(err)
    }
  }
};

//SERVICES SOLAMENTE INTERACTUA CON LA BASE DE DATOS.
