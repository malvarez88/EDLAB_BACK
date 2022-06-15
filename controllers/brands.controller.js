const brandServices = require("../services/brands.services");

module.exports = {
    getAll: async (req,res,next) => {
        try {
            const brands = await brandServices.getAll()
            res.send(brands)
        } catch (err) {
            next (err)
        }
    },
    addBrand: async (req,res,next) => {
        const brandToAdd = req.body;
        try {
            const addedBrand = await brandServices.addBrand(brandToAdd)
            res.send(addedBrand)
        } catch (err) {
            next(err)
        }
    },
}