const userController = require('./controllers/user.js');
const threadController = require('./controllers/thread');
const jwtCheck = require('./middleware/jwt');

module.exports = function(app) {
    app.post('/signup', userController.userCreate);
    app.post('/signin', userController.userSignin);
    app.post('/thread/create', jwtCheck, threadController.threadCreate);
    app.get('/',function(req,res) {
        return res.render('index.ejs',{});
    })
    app.get('/thread/:id', threadController.threadGet);
}
