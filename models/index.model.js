const Product = require ("./Product.model");
const User = require("./User.model")
const Cart = require("./Cart.model")
const Order_detail = require("./Order_detail.model")
const Category = require("./Category.model")
const Brand = require("./Brand.model")

Product.belongsTo(Category,{ as: "category" })
Category.hasMany(Product,{ as: "category" })

Product.belongsToMany(Cart,{ through: "orders_details" })
Cart.belongsToMany(Product,{ through: "orders_details" })

User.hasMany(Cart,{ as:"user" })
Cart.belongsTo(User,{ as:"user" })

Brand.hasMany(Product, {as: "brand"})
Product.belongsTo(Brand, {as: "brand"})

module.exports = {Product,User,Cart,Order_detail,Brand};



