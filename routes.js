const userController = require("./controllers/user");
const threadController = require("./controllers/thread");
const commentController = require("./controllers/comment");
const jwtCheck = require("./middleware/jwt");

module.exports = function(app) {
	app.post("/signup", userController.userCreate);
	app.post("/signin", userController.userSignin);
	app.post("/thread/create", jwtCheck, threadController.threadCreate);
	app.post("/comment/add", jwtCheck, commentController.comentAdd);
	app.get("/", threadController.threadsGet);
	app.get("/thread/:id", threadController.threadGet);
}
