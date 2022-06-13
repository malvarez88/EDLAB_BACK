
const Sequelize = require("sequelize")

const db = new Sequelize("edlab","postgres", "rodri15359248", {
  dialect: "postgres",
  logging: false,
});

module.exports = db;
