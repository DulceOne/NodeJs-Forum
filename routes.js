const controller = require('./controllers/user.js');
module.exports = function(app){
    app.post('/sigup', controller.userCreate);
}