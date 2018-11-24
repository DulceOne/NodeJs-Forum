const userController = require('./controllers/user.js');
const threadController = require('./controllers/thread');

module.exports = function(app){
    app.post('/signup', userController.userCreate);
    app.post('/signin', userController.userSignin);
    app.post('/threadCreate',threadController.threadCreate);
}
