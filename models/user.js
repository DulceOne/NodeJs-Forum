const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config.js');
const userShema = mongoose.Schema({
    name: {type: String, required: true},
    years: Number,
    email: String,
    role: String,
    password: String
});

var signOptions = {
    expiresIn:  "12h",
    algorithm:  "RS256"
   };

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
    var newUser = new User (user);

    User.findOne({name:user.name,password:user.password})
    .then(result => {
        if(result) {
            var token = jwt.sign({id: newUser._id,name: newUser.name}, config.jwtKey);
            return cb(null,token);
        }
        else {
            cb({message:"User not found"},null);
        }
    })
    .catch(err => {
        console.log(err)
       cb(err,null);
    })
}