const controller = require('./controllers/user.js');

module.exports = function(app){
    app.post('/signup', controller.userCreate);
    app.post('/signin', controller.userSignin);
    app.get('/resourse', (req,res) => {
        res.status(200).send("Public resourse, you can see this.");
        // console.log(req.headers.authorization);
    })
    
    app.get('/resourse/secret',(req,res) => {
        res.status(200).send("Private resourse.");
        // console.log(req.headers.authorization);
    });
}
