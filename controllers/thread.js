const Thread = require("../models/thread.js");
const Comment = require("../models/comment.js");

exports.threadCreate = (req,res) => {
	var thread = {
		title: req.body.title,
		content: req.body.content,
		date: new Date,
		author: req.body.author
	}
	try {
		new Thread(thread).save();
		res.send({message: "Thread added"});
	}
	catch (e) {
		res.send({error: e});
	}
}

exports.threadGet = (req,res) => {
	var id = req.params.id;
	Promise.all([ 
		Thread.find({_id: id}).lean(), 
		Comment.find({threadId: id}).lean(), 
	]).then(results=> {
		var { thread, comments } = results;
		results[0][0].date = pipeDate(results[0][0].date);
		for (var i in results[1])
			results[1][i].date = pipeDate(results[1][i].date);
		res.render("thread.ejs",{thread:results});
	}).catch(err => {
		res.send({message:err});
	});
}

exports.threadsGet = (req,res) => {
	Thread.find().lean().then(results => {
		for (var result of results) {
			result.date = pipeDate(result.date);
		}
		res.render("index.ejs",{threads:results});
	}).catch(err => {
		res.send({message:err});
	})
}

function pipeDate(dt) {
	var date = new Date(dt);
	var day = zeroAdd(date.getUTCDate());
	var month = zeroAdd(date.getUTCMonth()+1);
	var year = zeroAdd(date.getUTCFullYear());
	var hours = zeroAdd(date.getUTCHours());
	var minutes = zeroAdd(date.getUTCMinutes());
	return `${day}.${month}.${year} - ${hours}:${minutes}`;
}

function zeroAdd(number) {
	if (number < 10) return ("0" + number);
	else return number;
}