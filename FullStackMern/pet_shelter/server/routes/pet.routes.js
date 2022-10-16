// imports controller
const PetController = require('../controllers/pet.controller');
// exports the following routes for use elsewhere
module.exports = (app) => {
    // app.get('/api', PetController.index);
    // get all products
    app.get('/api/allPets', PetController.getAllPets);
    // get one Pet
    app.get('/api/onePet/:id', PetController.getOnePet)
    // create Pet
    app.post('/api/addPet', PetController.addPet);
    // update Pet
    app.put('/api/updatePet/:id', PetController.updatePet);
    // delete Pet
    app.delete('/api/deletePet/:id', PetController.deletePet)
}