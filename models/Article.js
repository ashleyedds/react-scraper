const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("Article", articleSchema);