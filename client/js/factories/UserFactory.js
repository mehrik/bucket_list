myApp.factory('UserFactory', function ($http) {
    var factory = {};
    var currentUser;
    var users = [];
    var _UF = this;

    factory.index = function (callback) {
        $http.get('/user').success(function (output) {
            if(!output.errors) {
                _UF.users = output;
                callback(_UF.users);
            } else {
                console.log('error has occured');
            }
        });
    }

    // Takes in a user object
    // Sends information to the backend to check it exists
    // If it exists, send back that existing user
    // If it does not exist, create a new user and send that back
    // The output parameter is the user object sent from the backend
    factory.create = function (newUser, callback) {
        $http.post('/user', newUser).success(function (output) {
            if(!output.errors) {
                _UF.currentUser = output;
                callback();
            } else {
                console.log('error has occured');
            }
        });
    };

    // Send back currently logged in user to controller
    factory.getCurrentUser = function (callback) {
        callback(_UF.currentUser);
    }

    factory.update = function (user, bucketItem, callback) {
        $http.post('/user/'+user._id, bucketItem).success(function (output) {
            if(!output.errors) {
                console.log(output);
                callback();
            } else {
                console.log('You have errors', output);
            }// end if
        });// end $http.post
    }// end update

    factory.show = function (userId, callback) {
        $http.get('/user/'+userId).success(function (output) {
            if(!output.errors) {
                callback(output);
            } else {
                console.log('You have errors', output);
            }// end if
        });
    }

    return factory;
});