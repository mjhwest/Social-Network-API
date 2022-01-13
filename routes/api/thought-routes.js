// //THOUGHT ROUTES NEEDED 
// // 1) GET ALL THOUGHTS 
// // 2) GET A SINGLE THOUGHT BY IF __id
// // 3)POST A NEW THOUGHT 
// // 4) UPDATE A THOUGHT BY IT ID
// // 5) DELETE A THOUGHT BY ITS _id

// const router = require('express').Router();
// const {
//     //POST
//     createThought,
//     createReaction,
//     //GET
//     getAllThoughts,
//     getThoughtById,
//     //PUT
//     updateThoughtById,
//     //DELETE
//     deleteThoughtById,
//     removeReaction
// } = require('../../controllers/thought-controller');

// //api/thoughts ----------GET all Thoughts 
// router.route('/').get(getAllThoughts);

// //api/thoughts/:id --------GET THOUGHTS by ID, UPDATE thought by ID, DELETE thought by ID 
// router.route('/:id').get(getThoughtById).update(updateThoughtById).delete(deleteThoughtById);

// //api/thoughts/:userId ---------POST new thought 
// router.route('/:userId').post(createThought);

// //api/thoughts/:thoughtId/reactions -----POST/create a reaction stored in single thoughts reactions array field 
// router.route('/api/thoughts/:thoughtId/reactions').post(createReaction);

// //api/thoughts/:thoughtId/reactionId -------------DELETE to pull and remove a reaction by the reaction's reactionId value
// router.route('/api/thoughts/:thoughtId/reactionId').delete(removeReaction);


// module.exports = router;