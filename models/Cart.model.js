const S = require("sequelize");
const db = require("../config/db");
const productsServices = require("../services/products.services");

class Cart extends S.Model {}


Cart.init(
  {
    shipping_address: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    order_date: {
      type: S.DATEONLY,
      allowNull: false,
    },
    order_status: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isIn: [["rejected","pending","approved"]]
      }
    },
  },
  { sequelize: db, modelName: "carts" }
);

module.exports = Cart;

