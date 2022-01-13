const { User, Thought } = require('../models');

module.exports - {
    //create a new USER 
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    //get all USER
    getAllUsers(req, res) {
        Course.find()
            .then((courses) => res.json(courses))
            .catch((err) => res.status(500).json(err));
    },

}