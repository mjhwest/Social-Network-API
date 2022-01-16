const { Thoughts, Users } = require('../models');

module.exports = {
    //create a thought
    // createThought(req, res) {
    //     Thoughts.create(req.body)
    //         .then((thought) => res.json(thought))
    //         .catch((err) => {
    //             console.log(err);
    //             return res.status(500).json(err);
    //         });
    // },

    createThought({ params, body }, res) {
        console.log(params);
        console.log(body);
        // console log user id and the content of the thought json
        Thoughts.create(body)
            // find the id of the user and push a new thought into the user thoughts array
            .then(({ _id }) => {
                console.log(`_id = ${_id}`)
                return Users.findOneAndUpdate({ _id: params.id }, { $push: { thoughts: _id } }, { new: true });
            })
            .then((newThought) =>
                console.log(`newThought = ${newThought}`) <<
                !newThought ?
                res.status(404).json({ message: "No thought with that ID" }) :
                res.json(newThought)
            )
            .catch((err) => res.json(err));
    },




    // createThought({ params, body }, res) {
    //     console.log(params);
    //     console.log(body);
    //     // console log user id and the content of the thought json
    //     Thoughts.create(body)
    //         // find the id of the user and push a new thought into the user thoughts array
    //         .then(({ _id }) => {
    //             console.log(`_id = ${_id}`)
    //             let doc = Users.findOneAndUpdate({ _id: params.id }, { $push: { thoughts: _id } }, { new: true }, );
    //             console.log(`doc = ${doc}`)
    //             return doc
    //         })
    //         .then((newThought) =>
    //             console.log(`newThought = ${newThought}`) <<
    //             !newThought ?
    //             res.status(404).json({ message: "No thought with that ID" }) :
    //             res.json(newThought)
    //         )
    //         .catch((err) => res.json(err));
    // },










    // GET to get all thoughts
    getAllThoughts(req, res) {
        Thoughts.find()
            .then((thoughts) => res.json(thoughts))
            // .catch((err) => res.status(500).json(err));
            .catch((err) => {
                console.log(err);
                res.status(500).json((err));
            })


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
    },

    // DELETE to remove a thought by its _id
    deleteThoughtById(req, res) {
        Thoughts.findOneAndRemove({ _id: req.params.id })
            .then((thought) =>
                !thought ?
                res.status(404).json({ message: "No user with that Id" }) :
                res.json({ message: "Thought has been deleted" })
                // :res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },


    // POST to create a reaction stored in a single thought's reactions array field
    // createReaction(req, res) {
    //     console.log('You are creating a reaction');
    //     console.log(req.body, req.params.thoughtId);

    //     Thoughts.findOneAndUpdate({ _id: req.params.thoughtId }, { $push: { reactions: req.body } }, { runValidators: true, new: true })
    //         .then((thought) =>
    //             !thought ?
    //             res
    //             .status(404)
    //             .json({ message: 'No thought found with that ID' }) :
    //             res.json({ message: "You have added a new thought" })
    //         )
    //         .catch((err) => res.status(500).json(err));

    // }


    createReaction(req, res) {
        Thoughts.findOneAndUpdate({ _id: req.params.thoughtId }, { reactions: req.body }, { runValidators: true, new: true })
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },



}