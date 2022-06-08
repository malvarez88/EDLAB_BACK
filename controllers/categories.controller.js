const categoriesServices = require ('../services/categories.services')

module.exports = {
    getAll : async (req, res, next) => {
        try {
            const allCategories = await categoriesServices.getAll();
            res.status(200).send(allCategories);
        } catch(err){
            next(err)
        }
    },
    getById: async (req, res, next) => {
        const idCategory = req.params.id;
        try {
            const getCategoryById = await categoriesServices.getById(idCategory);
            res.status(200).send(getCategoryById)
        } catch (err) {
            next(err)
        }
    },
    addCategory : async (req, res, next) => {
        try {
            const newCategory = await categoriesServices.addCategory(req.body);
            res.status(201).send(newCategory)
        } catch (err) {
            next(err)
        }
    },
    deleteCategory: async (req, res, next) => {
        const idCategory = req.params.id;
        try{
            const deletedCategory = await categoriesServices.deleteCategory(idCategory)
            res.sendStatus(200).send(deletedCategory)
        } catch (err) {
            next(err)
        }
    },
    updateCategory: async (req, res, next) => {
        const idCategory = req.params.id;
        const data = req.body;
        try {
            const updatedCategory = await categoriesServices.updateCategory(idCategory, data)
            res.sendStatus(202).json(updatedCategory)
        } catch (err) {
            next (err)
        }
    },
}