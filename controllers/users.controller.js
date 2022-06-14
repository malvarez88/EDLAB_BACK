const userServices = require("../services/users.services");
const cartServices = require("../services/carts.services");
const productsServices = require("../services/products.services");
const orderDetailServices = require("../services/order_details.services")

module.exports = {
  register: async (req, res, next) => {
    try {
      const userCreated = await userServices.register(req.body)
      res.status(201).json(userCreated);
    } catch (err) {
      console.log(err)
      next(err);
    }
  },
  addToCart: async (req, res, next) => {
    const {product,quantity} = req.body
    const user = req.user
    if (!product.id) return res.status(400).json({message:"No product provided"})
    try {
        const productToAdd = await productsServices.getById(product.id)
        if (!productToAdd) return res.status(404).json({message:"Product not found"})
        const userCart = await cartServices.findOrCreateCart(user) 
        const set = await userCart.addProducts(productToAdd)
        if (!set) return res.status(400).json({message:"The product is already in the cart"})
        let orderAdded = await orderDetailServices.find(userCart.id,productToAdd.id)
        if (!orderAdded) return res.status(500).json({message:"Order not found"})
        orderAdded.price = quantity*product.price
        orderAdded.quantity = quantity
        await orderAdded.save()
        return res.json("OK")
    } catch (err) {
        next (err)
    }
},
  deleteFromCart: async (req, res, next) => {
    const user = req.user
    const {product} = req.body
    if (!product.id) return res.status(400).json({message:"Product not provided"})
    try {
        const productToRemove = await productsServices.getById(product.id)
        if (!product.id) return res.status(404).json({message:"Product not found"})
        const userCart = await cartServices.findCart(user)
        if (!userCart) return res.status(404).json({message:"Cart not found"})
        await userCart.removeProducts(productToRemove)
        res.json("OK")
    } catch (err) {
        next (err)
    }
}
};


//LA VIDA HAY QUE VIVIRLA, ESE ES EL SIGNIFICADO!