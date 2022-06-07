const S = require("sequelize");
const db = require("../config/db");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
        len: [3, 30],
        //chequear despues regex!
      },
    },
    description: {
      type: S.TEXT,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: S.DECIMAL,
      allowNull: true,
      validate: {
        min: 0, //no puede ser menor que 0!
      },
    },
    image: {
      type: S.ARRAY(S.STRING),
    },
    stock: {
      type: S.INTEGER,
      allowNull: true,
      validate: {
        min: 0, //no puede haber stock negativo!
      },
      defaultValue: 0,
    },
    thumbnail: {
      type: S.STRING,
      validate: {
          isUrl: true,
      }
    },
  },
  { sequelize: db, modelName: "products" }
);




module.exports = Product;
