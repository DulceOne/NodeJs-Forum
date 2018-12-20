const threadModel = require('../models/thread.js');

exports.threadCreate = (req,res) => {
    var thread = {
        title: req.body.title,
        content: req.body.content,
        date: new Date,
        author: req.body.author
    }
    try{
        new threadModel.Thread(thread).save();
        res.send({message: "Thread added"});
    }
    catch(e){
        res.send({error: e});
    }
}

exports.threadGet = (req,res) => {
    var id = req.params.id;
    threadModel.Thread.findById({_id:id}).then(result => {
            res.send({thraed:result});
    })
    .catch(err => {
        res.send({message:err});
    })
}

exports.threadsGet = (req,res) => {
    threadModel.Thread.find().then(result => {
            res.render('index.ejs',{thraeds:result});
    })
    .catch(err => {
        res.send({message:err});
    })
}

