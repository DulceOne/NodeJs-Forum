const controller = require('./controllers/user.js');
const jwt = require('express-jwt');
const jwtCheck = jwt({
    secret: 'mymegasupernothacktopsecert322228key'
})
module.exports = function(app){
    app.post('/sigup', controller.userCreate);

    app.get('/resourse', (req,res) => {
        res.status(200).send("Public resourse, you can see this.");
    })
    
    app.get('/resourse/secret',jwtCheck,(req,res) => {
        res.status(200).send("Private resourse.");
    });
}
