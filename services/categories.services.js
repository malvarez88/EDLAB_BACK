const Category = require("../models/Category.model");
const Product = require('../models/Product.model');

module.exports = {
  getAll: async () => {
    try {
      const allCategories = await Category.findAll(
    //       {
    //     include: [{ model: Product}]
    //   }
      );
      return allCategories;
    } catch (err) {
      console.error(err);
    }
  },
  getByName: async(name) =>{
    try {
      const categoryData = await Category.findOne({where:{name}})
      return categoryData;
    } catch (err) {
      console.error(err)
    }
  },
  getById: async(id) => {
    try {
        const categoryData = await Category.findByPk(id
            // , 
        // {
        //   include: [{ model: Product}]
        // }
        )
        return categoryData;
      } catch (err) {
        console.error(err)
      }
    },
    addCategory: async (newCategory) => {
        try{
            const categoryCreated = await Category.create(newCategory);
            return categoryCreated;
        } catch(err){
            console.error(err)
        }
    },
    deleteCategory: async(id) => {
        try {
            const deletedCategory = await Category.destroy({
                where : {
                    id,
                }
            })
            return deletedCategory;
        } catch (err) {
            console.error(err)
        }
    },
    updateCategory: async (id, data) => {
        try {
            const updatedCategory = await Category.update(data, {
                where: { id },
                returning: true,
                plain: true
            })
            return updatedCategory[1]
        } catch (err) {
            console.error(err)
        }
    },
}

