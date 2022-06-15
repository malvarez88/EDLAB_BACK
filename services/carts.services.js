const User = require("../models/User.model");
const Cart = require("../models/Cart.model");

module.exports = {
    findOrCreateCart: async (user) => {
    try {
        const [userCart,created] = await Cart.findOrCreate({
            where: {
                userId: user.id,
                order_status: "pending"
            },
            defaults: {
                shipping_address: `${user.shipping_address}`,
                order_date : new Date()
            }
        })
        return userCart;
    } catch (err) {
        console.error(err)
        throw new Error("Error with Carts")
    }
  },
  findCart: async (user)=>{
    try {
        const userCart = await Cart.findOne({
            where: {
                userId: user.id,
                order_status: "pending"
            }
        })
        return userCart;
    } catch (err) {
        console.error(err)
        throw new Error("Error with Carts")
    }
  }
}