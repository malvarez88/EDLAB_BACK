const User = require("../models/User.model");
const Cart = require("../models/Cart.model");

module.exports = {
  getAll: async()=>{
    try {
        const allUsers = await User.findAll()
        return allUsers
    } catch (error) {
        throw new Error("Error getting users")
    }
  },
  deleteUser: async(id) =>{
    try{
        const userDeleted = await User.destroy({where:{id}})
        return userDeleted
    }catch(e){
        next(e)
    }
  },
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
  addToCart: async (product,user) => {
    try {
        const userCart = await Cart.findOrCreate({
            where: {
                userId: user.id,
                order_status: "pending"
            }
        })
        const orderCreated = await userCart.create(order)
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
