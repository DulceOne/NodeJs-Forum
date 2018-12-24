const userModel = require("../models/user.js");
const jwt = require("jsonwebtoken");
const config = require("../config.js");
exports.userCreate = (req,res) => {
	var user = {
		name: req.body.name,
		email: req.body.email,
		role: "user",
		password: req.body.password
	}

	userModel.findOne({name: user.name}).then(result => {
		if (result)
			res.send({message: "User with the same name exists"});
		new userModel(user).save().then(resuser => {
			res.send({message:"Signup is successful"});
		})
	})
}

exports.userSignin = (req,res) => {
	var user = {
		name: req.body.login,
		password: req.body.password
	}

	userModel.findOne({name:user.name,password:user.password}).then(result => {
		if (result){
			var token = jwt.sign({id: result._id,name: result.name}, config.jwtKey);
			res.send({token});
		}
		else res.send({message: "User not found"});
	}).catch(err => {
		res.send(err);
	})
}

