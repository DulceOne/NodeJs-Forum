const commentModel = require("../models/comment.js");

exports.comentAdd = (req, res) => {
	
	var comment = {
		content:req.body.comment,
		author: req.user.name,
		threadId:req.body.id,
		date:new Date
		// toUserId:req.body.toUserId
	}

	new commentModel.Comment(comment).save().then(result =>{
		res.send({message:"Сomment successfully added"});
	})
}