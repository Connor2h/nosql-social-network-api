const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction

} = require('../../controllers/thought-controller');


// Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);

// api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction);

module.exports = router;