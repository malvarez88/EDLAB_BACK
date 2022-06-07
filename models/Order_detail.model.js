const S = require("sequelize");
const db = require("../config/db");

class Order_detail extends S.Model {}

Order_detail.init(
  {
    price: {
      type: S.DECIMAL,
      allowNull: false,
      validate:{
          min:0
      }
    },
    quantity:{
      type: S.INTEGER,
      allowNull:false,
      validate:{
          min:0
      }
    }
  },
  { sequelize: db, modelName: "orders_details" }
);

module.exports = Order_detail;