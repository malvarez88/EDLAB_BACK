const S = require("sequelize");
const db = require("../config/db");

class Category extends S.Model {}

Category.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    thumbnail:{
      type: S.STRING,
      allowNull:false,
      validate:{
          isUrl:true
      }
    },
  },
  { sequelize: db, modelName: "categories" }
);

module.exports = Category;