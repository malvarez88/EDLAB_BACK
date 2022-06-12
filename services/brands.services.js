const Brand = require("../models/Brand.model");

module.exports = {
  getByName: async (name) => {
    try {
      const brand = await Brand.findOne({
        where: {
          name,
        },
      });
      return brand;
    } catch (err) {
      console.error(err);
    }
  },
  getAll: async () => {
      try {
          const brands = await Brand.findAll()
          return brands;
      } catch (err){
          console.error(err)
      }
  },
  addBrand: async (brand) => {
      try{
          const addedBrand = await Brand.create(brand)
          return addedBrand;
      } catch (err) {
          console.error(err)
      }
  }
};