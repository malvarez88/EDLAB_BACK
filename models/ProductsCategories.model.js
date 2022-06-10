const S = require("sequelize");
const db = require("../config/db");

class ProductCategories extends S.Model {}

ProductCategories.init(
  {
    id:{
      type:S.INTEGER,
      primaryKey:true
    },
    productId:S.INTEGER,
    categoryId:S.INTEGER
  },
  { sequelize: db, modelName: "products_categories" }
);


module.exports = ProductCategories;