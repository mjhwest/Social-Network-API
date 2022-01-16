const router = require('express').Router();
const {
    createThought,
    createReaction,
    getAllThoughts,
    getThoughtById,
    updateThoughtById,
    deleteThoughtById,
} = require('../../controllers/thought-controller');

router.route('/')
    // .post(createThought)
    .get(getAllThoughts);


router.route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById)
    .post(createThought);


router.route('/:thoughtId/reactions')
    .post(createReaction);

// //api/thoughts/:thoughtId/reactionId -------------DELETE to pull and remove a reaction by the reaction's reactionId value
// router.route('/api/thoughts/:thoughtId/reactionId').delete(removeReaction);


module.exports = router;