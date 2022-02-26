const router = require('express').Router();
const {
    getAllThoughts,
    
} = require('../../controllers/thought-controller');


// Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)

// Set up GET one, PUT, and DELETE at /api/users/:id
// router
//     .route('/:id')
//     .get(getUserById)
//     .put(updateUser)
//     .delete(deleteUser);

    // api/users/:userId/friends/:friendId
// router
//     .route('/:userId/friends/:friendId')
//     .post(addFriend)
    //.delete(removeFriend);

module.exports = router;