const S = require("sequelize");
const db = require("../config/db");

class User extends S.Model {}

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
      validate: {
        unique:true,
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
      }
    },
    phone:{
      type:S.STRING,
      validate:{
        is:[/^[+][(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]$/g]
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

module.exports = User;