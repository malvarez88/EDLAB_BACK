const userServices = require("../services/users.services");
const cartServices = require("../services/carts.services");
const productsServices = require("../services/products.services");
const orderDetailServices = require("../services/order_details.services");
const Product = require("../models/Product.model");

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
},
  buyConfirm: async (req,res,next)=>{
    const user = req.user
    try{
      const userCart = await cartServices.findCart(user)
      if (!userCart) return res.status(404).json({message:"Pending cart not found"})
      const productsCart = await userCart.getProducts()
      if (productsCart.length==0) return res.status(400).json({message:"Cart is empty"})
      const productPromises = productsCart.map((product)=>{
        const stock = product.stock - product.orders_details.quantity
        if (stock<0) throw new Error(`The product ${product.name} does not have enough stock`)
        return Product.update({stock},{where:{id:product.id}})
      })

      Promise.all(productPromises).then((r)=>{
        userCart.order_status="approved"
        return userCart.save()
      }).then(()=>{
        res.json("OK")
      }).catch((error)=>{
        console.log(error)
        next(error)
      })

    }catch(error){
      next(error)
    }
  }
};


//LA VIDA HAY QUE VIVIRLA, ESE ES EL SIGNIFICADO!