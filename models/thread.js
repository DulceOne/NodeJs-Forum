const mongoose = require('mongoose');
exports.threadShema = mongoose.Schema({
    title: {type: String, required: true},
    content: String,
    date: Date,
    author: String
});