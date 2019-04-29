const mongoose = require("mongoose");
const userShema = mongoose.Schema({
	name: {type: String, required: true},
	years: Number,
	email: String,
	role: String,
	password: String
});

module.exports = mongoose.model("User",userShema);