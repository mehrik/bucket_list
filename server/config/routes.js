var bodyParser = require('body-parser');
var user = require('../controllers/users.js');
var bucketItem = require('../controllers/bucketItems.js');

module.exports = function(app) {
    app.use(bodyParser.json());

    // show all
    app.get('/user', user.index);
    app.get('/bucketItem', bucketItem.index);

    // create
    app.post('/user', user.create);
    app.post('/bucketItem', bucketItem.create);

    // show one user
    app.get('/user/:id', user.showOne);

    // update user if user is tagged
    app.post('/user/:id', user.update);

}