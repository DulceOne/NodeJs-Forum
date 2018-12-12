const mongoose = require('mongoose');
const threadSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: String,
    date: Date,
    author: String
});

exports.Thread = mongoose.model('Thread',threadSchema);
 