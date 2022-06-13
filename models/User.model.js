const S = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt")

class User extends S.Model {
  encryptPassword(password,salt){
    return bcrypt.hash(password,salt)
  }  
  async comparePassword(password){
    return bcrypt.compare(password,this.password)
  }

}

User.init(
  {
    first_name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 30],
        is: [/^[A-Za-z ]+$/g]
      },
    },
    last_name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len:[3,35],
        is: [/^[A-Za-z ]+$/g]
      },
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique:true,
      validate: {
        isEmail:true,
        notEmpty:true
      },
    },
    thumbnail: {
      type: S.STRING,
      validate:{
        isUrl:true
      }
    },
    password: {
      type: S.STRING,
      allowNull: false,
      validate: {
        len:[7,30],
        is:[/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/g]
        //una mayuscula, 7 letras y 1 numero.
      }
    },
    phone:{
      type:S.STRING,
      validate:{
        is:[/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g]
      }
    },
    shipping_address:{
      type:S.ARRAY(S.STRING)
    },
    billing_address:{
      type:S.STRING
    },
    isAdmin:{
      type:S.BOOLEAN,
      defaultValue:false
    }
 
  },
  { sequelize: db, modelName: "users" }
);

User.beforeCreate(async (user)=>{
  if (!user.password) return
  try{
      const salt = await bcrypt.genSalt(10)
      const passwordHash = await user.encryptPassword(user.password,salt)
      user.password = passwordHash
  }catch(e){
      throw new Error("ERROR PASSWORD")
  }
})

module.exports = User;