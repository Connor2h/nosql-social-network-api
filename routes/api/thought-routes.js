const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought

} = require('../../controllers/thought-controller');


// Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getThoughtById)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);

// api/users/:userId/friends/:friendId
// router
//     .route('/:userId/friends/:friendId')
//     .post(addFriend)
//.delete(removeFriend);

module.exports = router;