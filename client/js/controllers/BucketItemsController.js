myApp.controller('BucketItemsController', function ($location, $routeParams, UserFactory, BucketItemFactory) {
    var _this = this;
    var currentUser;
    var users;

    this.index = function () {
        UserFactory.index(function (output) {
            _this.users = output;
            console.log(_this.users);
        })
        _this.getCurrentUser();
    }

    this.getCurrentUser = function () {
        UserFactory.getCurrentUser(function (data) {
            _this.currentUser = data;
            console.log(_this.currentUser);
        });
    }

    this.index();

    // if no currentUser is logged in, send back to login page
    if(!_this.currentUser) {
        $location.path('/');
    }

});