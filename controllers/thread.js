const thredModel = require('../models/thread.js');

exports.threadCreate = (req,res) => {
    var thread = {
        title: req.body.title,
        content: req.body.content,
        date: new Date,
        author: req.body.author
    }

    thredModel.threadCreate(thread,(err,result)=> {
        if(!err)
          return  res.status(200).send(result);
        res.send(err);
    })
}