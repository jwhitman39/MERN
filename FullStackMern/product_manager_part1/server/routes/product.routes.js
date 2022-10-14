// imports controller
const ProductController = require('../controllers/product.controller');
// exports the following routes for use elsewhere
module.exports = (app) => {
    // app.get('/api', ProductController.index);
    // get all products
    app.get('/api/allProducts', ProductController.getAllProducts);
    // get one product
    app.get('/api/oneProduct/:id', ProductController.getOneProduct)
    // create product
    app.post('/api/addProduct', ProductController.addProduct);
    // update product
    app.put('/api/updateProduct/:id', ProductController.updateProduct);
    // delete product
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct)
}