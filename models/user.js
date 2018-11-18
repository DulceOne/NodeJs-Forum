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
   var newUser = new User ({
        name:user.name,
        years: user.years,
        email: user.email,
        password: user.password
    })
    .save()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    })
}