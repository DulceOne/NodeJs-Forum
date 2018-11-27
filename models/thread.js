const mongoose = require('mongoose');
const threadShema = mongoose.Schema({
    title: {type: String, required: true},
    content: String,
    date: Date,
    author: String
});

var Thread = mongoose.model('Thread',threadShema);

exports.threadCreate = (thread,cb) => {
    var newThread = new Thread (thread);
    
    newThread.save((err,res) => {
        if(!err)
            return cb(err,{message: "Thread added"});
        cb(err,null);
    })
}

exports.threadGet = (id,cb) => {
    Thread.findById({_id: id})
    .then(result => {
        return cb(null, result);
    })
    .catch(err => {
        cb(err, null);
    })
}