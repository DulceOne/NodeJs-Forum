const userModel = require('../models/user.js');

exports.userCreate = (req,res) => {
    user = {
        name: req.body.name,
        years: req.body.years,
        email: req.body.email,
        password: req.body.password
    }
    console.log(user);

    userModel.userCreate(user,(err,result) => {
        if(err)
            res.send(err);
        else
            res.send(result);
    })
}

exports.userSignin = (req,res) => {
    user = {
        name: req.body.name,
        password: req.body.password
    }

    userModel.userSignin(user,(err,result) => {
        if(err)
            res.send(err);
        else
            res.send(result);
    })
}