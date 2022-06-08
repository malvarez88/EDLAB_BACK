const userServices = require("../services/users.services");

module.exports = {
  register: async (req, res, next) => {
    try {
      const userCreated = await userServices.register(req.body)
      res.status(201).json(userCreated);
    } catch (err) {
      next(err);
    }
  }
};


