const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
	threadId:String,
	toUserId:String,
	content: String,
	date: Date,
	author: String
});

exports.Comment = mongoose.model("Comment",commentSchema);
 