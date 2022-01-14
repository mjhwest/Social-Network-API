const { User, Thought } = require('../models');

module.exports = {
    //get all USER
    getAllUsers(req, res) {
        User.find()
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //create a new USER 
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //get a user by _id 
    getUserById(req, res) {
        User.findOne({ _id: req.params.id })
            .select('-__v')
            .then((user) =>
                !user ?
                res.status(404).json({ message: "No user with that ID" }) :
                res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    //update a user by its id 
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, new: true })
            .then((user) =>
                !course ?
                res.status(404).json({ message: 'No course with this id!' }) :
                res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    //test


}