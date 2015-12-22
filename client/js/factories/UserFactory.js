myApp.factory('UserFactory', function ($http) {
    var factory = {};
    var currentUser;
    var users = [];
    var _UF = this;

    factory.index = function (callback) {
        $http.get('/user').success(function (output) {
            _UF.users = output;
            callback(_UF.users);
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

    factory.getCurrentUser = function (callback) {
        console.log('THis is the current USERRRR', _UF.currentUser);
        callback(_UF.currentUser);
    }

    return factory;
});