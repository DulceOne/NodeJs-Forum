const userModel = require('../models/user.js');
exports.userCreate = (req,res) => {
    user = {
        name: req.body.name,
        years: req.body.years,
        email: req.body.email,
        password: req.body.password
    }
    console.log(user);

    userModel.userCreate(user,(err,result) => {
        if(err)
            console.error('Old erorr');
        console.log(result);
    })
}