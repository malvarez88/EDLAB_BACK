const S = require("sequelize");
const db = require("../config/db");

class Review extends S.Model {}

Review.init(
  {
    review: {
      type: S.TEXT,
    },
    stars:{
        type:S.INTEGER,
        validate:{
            max: 5,
            min:0
        }
    }
  },
  { sequelize: db, modelName: "User_reviews" }
);



module.exports = Review;