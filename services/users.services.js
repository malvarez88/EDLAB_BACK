const User = require("../models/User.model");
const Cart = require("../models/Cart.model");

module.exports = {
  register: async (userData) => {
      const userCreated = await User.create(userData);
      return userCreated;
  },
  logIn : async (userData) => {
    try {
      const userLogged = await User.findOne({where:{email:userData.email}});
      return userLogged;
    } catch (err) {
      console.error(err);
    }
  },
  addToCart: async (product) => {
    try {
        const order = await Cart.findOrCreate({
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
