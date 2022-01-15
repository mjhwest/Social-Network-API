const router = require('express').Router();
const {
    //POST
    createThought,
    //     createReaction,
    //     //GET
    getAllThoughts,
    getThoughtById,
    //     //PUT
    updateThoughtById,
    //     //DELETE
    //     deleteThoughtById,
    //     removeReaction
} = require('../../controllers/thought-controller');

// //api/thoughts/:userId ---------POST new thought and GET all thoughts
router.route('/').post(createThought).get(getAllThoughts);


// //api/thoughts/:id --------GET THOUGHTS by ID, UPDATE thought by ID, DELETE thought by ID 
router.route('/:id').get(getThoughtById).put(updateThoughtById);

// update(updateThoughtById).delete(deleteThoughtById);


// //api/thoughts/:thoughtId/reactions -----POST/create a reaction stored in single thoughts reactions array field 
// router.route('/api/thoughts/:thoughtId/reactions').post(createReaction);

// //api/thoughts/:thoughtId/reactionId -------------DELETE to pull and remove a reaction by the reaction's reactionId value
// router.route('/api/thoughts/:thoughtId/reactionId').delete(removeReaction);


module.exports = router;