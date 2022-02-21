const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updatePizza,
    deletePizza
} = require('../../controllers/user-controller');


// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getPizzaById)
//     .put(updatePizza)
//     .delete(deletePizza);

module.exports = router;