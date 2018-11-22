const db = require('../db.js');
const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    name: {type: String, required: true},
    years: Number,
    email: String,
    password: String
});

var User = mongoose.model('User',userShema);

exports.userCreate =  (user,cb) => {
   var newUser = new User (user);
    User
    .findOne({name: user.name})
    .then(result => {
        if(result)
            return cb(null,{message: "User with the same name exists "})
        newUser.save(function(err,res) {
            if(!err)
                return cb(err,{message:"Signup is successful"});
            cb(err,null);
        })
    })
    .catch(err => {
        console.log(err)
    })
}
