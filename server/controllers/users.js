var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
    return {
        index: function (req, res) {
            User.find({}, function (err, users) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(users);
                }// end if
            });// end find
        },// end index
        create: function (req, res) {
            // Check to see if user name exists
            // If it exists, send back that user data
            // If it does not exist, create a new user and send back that user
            User.findOne({name: req.body.name}, function (err, existingUser) {
                if (err) {
                    res.json(err);
                } else if (existingUser) {
                    console.log('User found!', existingUser);
                    res.json(existingUser);
                } else if (!existingUser) {
                    console.log('Creating new user!');
                    var user = new User(req.body);
                    user.save(function (err, newUser) {
                        if (err) {
                            res.json(err);
                        } else {
                            res.json(newUser);
                        }// end if
                    });// end save
                }// end if
            });// end findOne
        },// end create
        update: function (req, res) {
            res.json('users.update');
        },
        showOne: function (req, res) {
            console.log(req.params.id);
            res.json('users.showOne');
        } 
    }
})();