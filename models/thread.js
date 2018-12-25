const mongoose = require("mongoose");
const threadSchema = mongoose.Schema({
	title: {type: String, required: true},
	content: String,
	date: Date,
	author: String
});

module.exports = mongoose.model("Thread",threadSchema);
 