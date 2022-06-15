const S = require("sequelize");
const db = require("../config/db");

class Order_detail extends S.Model {}
//CADA PRODUCTO
Order_detail.init(
  {
    price: {
      type: S.DECIMAL,
      validate:{
          min:0
      }
    },
    quantity:{
      type: S.INTEGER,
      defaultValue:0,
      validate:{
          min:0
      }
    }
  },
  { sequelize: db, modelName: "orders_details" }
);

module.exports = Order_detail;