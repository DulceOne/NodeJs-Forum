const threadModel = require('../models/thread.js');

exports.threadCreate = (req,res) => {
    var thread = {
        title: req.body.title,
        content: req.body.content,
        date: new Date,
        author: req.body.author
    }

    threadModel.threadCreate(thread,(err,result) => {
        if(!err)
          return  res.status(200).send(result);
        res.send(err);
    })
}

exports.threadGet = (req,res) => {
    var id = req.params.id;

    threadModel.threadGet(id,(err,result) => {
        if(!err)
            return  res.status(200).send(result);
        res.send(err);
    })
}