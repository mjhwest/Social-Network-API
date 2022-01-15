const { resetWatchers } = require('nodemon/lib/monitor/watch');
const { Thoughts } = require('../models');

module.exports = {

    //create a thought
    createThought(req, res) {
        Thoughts.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // createThought({ params, body }, res) {
    //     Thoughts.create(body)
    //         .then(({ _id }) => {
    //             return User.findOneAndUpdate({ username: body.username }, { $push: { thoughts: req.params.userId } }, { new: true });
    //         })
    //         .then(dbUserData => {
    //             if (!dbUserData) {
    //                 res.status(404).json({ message: 'No user found with this username!' });
    //                 return;
    //             }
    //             res.json(dbUserData);
    //         })
    //         .catch(err => res.json(err));
    // },

    // createThought(req, res) {
    //     console.log('You are adding a thought');
    //     console.log(req.body);
    //     Thoughts.findOneAndUpdate({ _id: req.params.id }, { $push: { thoughts: req.params.userId } }, { runValidators: true, new: true })
    //         .then((thoughts) =>
    //             !thoughts ?
    //             res
    //             .status(404)
    //             .json({ message: 'No user found with that ID :(' }) :
    //             res.json(thoughts)
    //         )
    //         .catch((err) => res.status(500).json(err));
    // },



    // GET to get all thoughts
    getAllThoughts(req, res) {
        Thoughts.find()
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },


    // GET to get a single thought by its _id
    getThoughtById(req, res) {
        Thoughts.findOne({ _id: req.params.id })
            .select('-__v')
            .then((user) =>
                !user ?
                res.status(404).json({ message: "No user with that ID" }) :
                res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    //update a thought by its ID
    updateThoughtById(req, res) {
        Thoughts.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { runValidators: true, new: true })
            .then((thought) =>
                !thought ?
                res.status(404).json({ message: "No thought with this ID" }) :
                res.json({ message: "Thought has been updated" })
            )
            .catch((err) => res.status(500).json(err))
    }

























}