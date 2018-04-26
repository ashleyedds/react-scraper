const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        Article
        .find(req.query)
        .sort({ date: -1 })
        .then(data => res.json(data))
        .catch(err => console.log(err));
    },
    create: (req, res) => {
        Article
        .create(req.body)
        .then(data => res.json(data))
        .catch(err => console.log(err));
    },
    delete: (req, res) => {
        Article
        .findById({ _id: req.params.id })
        .then(data => data.remove())
        .then(data => res.json(data))
        .catch(err => console.log(err));
    }
}