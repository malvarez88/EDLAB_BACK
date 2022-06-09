const userServices = require("../services/users.services");

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
    const product = req.body
    try {
        const addCart = await cartServices.addToCart(product)
        res.send(addCart)
    } catch (err) {
        next (err)
    }
},
  deleteFromCart: async (req, res, next) => {
    const product = req.body
    try {
        const deleteProduct = await cartServices.deleteFromCart(product)
        res.send(deleteProduct)
    } catch (err) {
        next (err)
    }
}
};


//LA VIDA HAY QUE VIVIRLA, ESE ES EL SIGNIFICADO!