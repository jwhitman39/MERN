// imports controller
const AuthorController = require('../controllers/author.controller');
// exports the following routes for use elsewhere
module.exports = (app) => {
    // app.get('/api', AuthorController.index);
    // get all products
    app.get('/api/allAuthors', AuthorController.getAllAuthors);
    // get one author
    app.get('/api/oneAuthor/:id', AuthorController.getOneAuthor)
    // create author
    app.post('/api/addAuthor', AuthorController.addAuthor);
    // update author
    app.put('/api/updateAuthor/:id', AuthorController.updateAuthor);
    // delete author
    app.delete('/api/deleteAuthor/:id', AuthorController.deleteAuthor)
}