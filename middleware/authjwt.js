const jwt = require("jsonwebtoken")
const {SECRET} = require("../config/jwt")
const User = require("../models/User.model")
const userService = require("../services/users.services")

const verifyToken = async (req,res,next) => {
    const token = req.headers["x-access-token"]
    if (!token) return res.status(400).json({message:'No token provided'})

    try{
        const userData = jwt.verify(token,SECRET)
        req.userId = userData.id
    }catch(error){
        return res.status(400).json({message:'Invalid token'})
    }

    if (!req.userId) return res.status(400).json({message:'Invalid token'})

    try{
        const user = await User.findByPk(req.userId)
        req.user = user
        next()
    }catch(error){
        return res.status(400).json({message:'No user found'})
    }
}

const logIn = async (req, res, next) => {
    console.log("hola")
    const dataUser = req.body
    try {
      const userLogged = await userService.logIn(dataUser)
      if (!userLogged) return res.status(400).json({message:'Unauthorized'})
      const token = jwt.sign({id:userLogged.id,role: userLogged.isAdmin},SECRET,{expiresIn:20000})
      res.json({token})
    } catch (err) {
      next(err);
    }
  }

module.exports = {verifyToken,logIn}