const orderDetails = require("../models/Order_detail.model")

module.exports = {
    create: async (order)=>{
        try{
            const orderDetail = await orderDetails.create(order)
            return orderDetail
        }catch(error){
            throw new Error("Error with OrdersDetails")
        }
    },
    find: async (cartId,productId)=>{
        try{
            const orderFound = await orderDetails.findOne({where:{productId,cartId}})
            return orderFound
        }catch(e){
            throw new Error("Error with orderDetails")
        }
    }
}