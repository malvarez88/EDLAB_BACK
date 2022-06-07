
const Sequelize = require('sequelize')

const db = new Sequelize("edlab", null, null, {
  dialect: 'postgres',
  logging: false,
});

module.exports = db;
