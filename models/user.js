const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config.js');
const userShema = mongoose.Schema({
    name: {type: String, required: true},
    years: Number,
    email: String,
    password: String
});

var User = mongoose.model('User',userShema);

exports.userCreate =  (user,cb) => {
   var newUser = new User (user);
    User.findOne({name: user.name})
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


exports.userSignin = (user,cb) => {
    User.findOne({name:user.name,password:user.password})
    .then(result => {
        if(result) {
            const token = jwt.sign({
                data:User.name
            },config.jvtKey,{expiresIn: 60 * 60});
            return cb(null,token);
        }
        else {
            cb({message:"User not found"},null);
        }
    })
    .catch(err => {
       cb(err,null);
    })
}