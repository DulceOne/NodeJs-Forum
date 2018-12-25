const commentModel = require("../models/comment.js");

exports.comentAdd = (req, res) => {
	
	var comment = {
		content:req.body.comment,
		author: req.user.name,
		threadId:req.body.id,
		date:new Date,
		toUserId:req.body.toUserId
	}

	console.log(comment);

	new commentModel(comment).save().then(result => {
		res.send({message:"Сomment successfully added"});
	})
}