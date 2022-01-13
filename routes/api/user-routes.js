const router = require('express').Router();
const {
    //POST
    createUser,
    addNewFriend,
    //GET
    getAllUsers,
    getUserById,
    //PUT
    updateUserById,
    //DELETE
    deleteUserById,
    removeFriend
} = require('../../controllers/user-controller');

//api/users ----------GET all Users and POST a NEW USER 
router.route('/').get(getAllUsers).post(createUser);

//or
// router.route('/').post(createUser)

//api/users/:id -------GET USER BY ID, UPDATE USER BY ID and DELETE USER BY ID 
router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById);

//api/users/:userId/friends/:friendId -----POST /NEW FRIEND TO USERS FRIEND LIST and REMOVE A FRIEND 
router.route('/:id/friends/:friendsId').post(addNewFriend).delete(removeFriend);

module.exports = router;