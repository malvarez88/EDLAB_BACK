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
  getById: async () => {
      try {
        const idProduct = await Product.findOne({
            where: {
                id
            }
        })
        return idProduct;

      } catch (err){
          console.error(err)
      }

  }
};


//SERVICES SOLAMENTE INTERACTUA CON LA BASE DE DATOS.