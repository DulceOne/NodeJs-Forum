const threadModel = require('../models/thread.js');
const mongoose = require('mongoose');
var Thread = mongoose.model('Thread',threadModel.threadShema);

exports.threadCreate = async (req,res) => {
    var thread = {
        title: req.body.title,
        content: req.body.content,
        date: new Date,
        author: req.body.author
    }
    try{
        new Thread (thread).save();
        res.send({message: "Thread added"});
    }
    catch(e){
        res.send({error: e});
    }
}

exports.threadGet = async (req,res) => {
    var id = req.params.id;
    Thread.findById({_id:id}).then(result => {
            res.send({thred:result});
    })
    .catch(err => {
        res.send({message:err});
    })
}

