const S = require("sequelize");
const db = require("../config/db");

class Order extends S.Model {}

Order.init(
  {
    shipping_address: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    order_date:{
      type: S.DATEONLY,
      allowNull:false
    },
    order_status:{
      type:S.STRING,
      allowNull: false,
      validate: {
        isIn: [["rejected","pending","approved"]]
      }
    }

  },
  { sequelize: db, modelName: "orders" }
);

module.exports = Order;