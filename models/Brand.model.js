const S = require("sequelize");
const db = require("../config/db");

class Brand extends S.Model {}

Brand.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    image: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "brands" }
);

module.exports = Brand;


