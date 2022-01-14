const { User, Thought } = require('../models');

module.exports = {
    //get all USER
    getAllUsers(req, res) {
        User.find()
            .then((courses) => res.json(courses))
            .catch((err) => res.status(500).json(err));
    },

    //create a new USER 
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    //get a user by id 
    getUserById(req, res) {
        User.findOne({ _id: req.params.getUserById })
            .select('-__v')
            .then((user) =>
                !user ?
                res.status(404).json({ message: "No user with that ID" }) :
                res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    }






}