const productService = require('../services/products.services');





module.exports = {
    getAll: async (req, res, next) => {
        try {
            const allProducts = await productService.getAll();
            res.send(allProducts)
        } catch (err){
            next(err);
        }
    }
}

//RECIBE DATOS DE LA DB, DECIDE QUE HACER CON ELLOS.