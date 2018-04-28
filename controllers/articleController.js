const Article = require('../models/article');

// Defining methods for the main controller
module.exports = {
    findAll: function(req, res) {
    Article
        .find(req.query)
        .sort({ savedDate: -1 })
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
    Article
        .create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
    Article
        .findById({ _id: req.params.id })
        .then(data => data.remove())
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    }
};


