const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/forum", { useNewUrlParser: true }).then(() => {
	console.log("Database is worked");
}).catch( (e) =>{
	console.log("Database disconnect");
}) 
module.exports = mongoose.connection;