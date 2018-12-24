const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports = function(req,res,next) {
	var token = req.headers["x-access-token"];
	if (!token)
		return res.status(404).send({message:"Not access token"});

	jwt.verify(token, config.jwtKey, (err, decoded) => {
		if (err)
			return res.status(500).send({ auth: false, message: "Failed to authenticate token." });
		req.user = decoded;
		next();
	})
}
