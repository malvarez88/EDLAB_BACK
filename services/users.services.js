const User = require("../models/User.model");

module.exports = {
  register: async (userData) => {
    try {
      const userCreated = await User.create(userData);
      return userCreated;
    } catch (err) {
      console.error(err);
    }
  },
  logIn : async (userData) => {
    try {
      const userLogged = await User.findOne({where:userData});
      return userLogged;
    } catch (err) {
      console.error(err);
    }
  }
};
