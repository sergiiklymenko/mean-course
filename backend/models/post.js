const { default: mongoose } = require("mongoose")

const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    title: {String, required: true},
    content: {String, required: true},
});

module.exports = mongoose.model('Post', postSchema);