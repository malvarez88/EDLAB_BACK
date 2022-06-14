const S = require("sequelize");
const db = require("../config/db");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 30],
        //chequear despues regex!
      },
    },
    description: {
      type: S.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: S.DECIMAL,
      allowNull: false,
      validate: {
        min: 0, //no puede ser menor que 0!
      },
    },
    image: {
      type: S.ARRAY(S.STRING),
    },
    stock: {
      type: S.INTEGER,
      allowNull: false,
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
