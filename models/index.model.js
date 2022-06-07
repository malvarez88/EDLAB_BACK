const Product = require ('./Product.model');
const User = require('./User.model')
const Order = require('./Order.model')
const Order_detail = require('./Order_detail.model')
const Category = require('./Category.model')

Product.belongsToMany(Category,{ through: 'products_categories' })
Category.belongsToMany(Product,{ through: 'products_categories' })

Product.belongsToMany(Order,{ through: 'orders_details' })
Order.belongsToMany(Product,{ through: 'orders_details' })

User.belongsTo(Order,{ as:'orders' })
Order.hasOne(User,{ as:'orders' })

module.exports = {Product,User,Order,Order_detail};