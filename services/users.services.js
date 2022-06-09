const User = require("../models/User.model");

module.exports = {
  register: async (userData) => {
    try {
      const userCreated = await User.create(userData);
      return userCreated;
    } catch (err) {
      console.error(err);
    }
  },
  logIn : async (userData) => {
    try {
      const userLogged = await User.findOne({where:userData});
      return userLogged;
    } catch (err) {
      console.error(err);
    }
  },
  addToCart: async (product) => {
    try {
        const order = await OrderDetails.findOrCreate({
            where: {
                id: product.id
            }
        })
        const orderCreated = await Cart.create(order)
        return orderCreated;
    } catch (err) {
        console.error(err)
    }
},
deleteFromCart: async (product) => {
    try {
        const deletedProduct = await Cart.destroy({
            where: {
                id: product.id
            }
        })
        return deletedProduct;
    } catch (err) {
        console.error(err)
    }
}
};
