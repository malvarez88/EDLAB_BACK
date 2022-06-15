const productService = require("../services/products.services");
const categoriesServices = require ("../services/categories.services");
const brandServices = require("../services/brands.services");
const productsServices = require("../services/products.services");
const User_review = require("../models/User_review.model");
const Order_detail = require("../models/Order_detail.model");


module.exports = {
  getAll: async (req, res, next) => {
    const {name,category,brand} = req.query
    try{
      const allProducts = await productService.getByQuery(name,category,brand)
      res.json(allProducts)
    }catch(e){
      console.log(e)
      next(e)
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
  getReviews: async (req,res,next)=>{
    const productId = req.params.id
    try{
      const allReviews = await User_review.findAll({where:{productId},attributes:['review', 'stars']})
      return res.json(allReviews)
    }catch(error){
      next(error)
    }
  },
  addReview: async (req,res,next)=>{
    const user = req.user
    const productId = req.params.id
    const {review,stars} = req.body
    try{
      const product = await productsServices.getById(productId)
      if (!product) return res.status(404).json({message:"Product not Found"})
      const reviewsCount = await User_review.count({where:{productId,userId:user.id}})
      if (reviewsCount>0) return res.status(403).json({message:"The user has already reviewed this product"})
      const reviewCreated = await product.addUsers(user)
      if (!reviewCreated) return res.status(400).json({message:"The review already exist!"})
      const newReview = await User_review.findOne({where:{productId,userId:user.id}})
      newReview.review = review
      newReview.stars = stars
      await newReview.save()
      console.log(newReview)
      return res.json("OK")
    }catch(error){
      next(error)
    }
  },
  addProduct: async (req, res, next) => {
      const category = req.body.category;
      const brand = req.body.brand;
      if(!category) return res.status(400).json({message: "Bad Request: category is needed"});
      if(!brand) return res.status(400).json({message: "Bad Request: brand is needed"});
    try {
      const productCategory = await categoriesServices.getByName(category)  
      const productBrand = await brandServices.getByName(brand) 
      const newProduct = await productService.addProduct(req.body)
      newProduct.setCategory(productCategory)
      newProduct.setBrand(productBrand)
      res.status(201).json(newProduct)
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
      const updateProduct = await productService.updateProduct(idProduct, data);
      res.status(202).json(updateProduct);
    } catch (err) {
      next(err);
    }
  },
};

//RECIBE DATOS DE LA DB, DECIDE QUE HACER CON ELLOS.
