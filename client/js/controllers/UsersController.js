myApp.controller('UsersController', function ($location, $routeParams, UserFactory) {
    var _this = this;

    // Send information to UF.create
    // After success, redirect to the dashboard
    this.create = function () {
        UserFactory.create(_this.newUser, function () {
            $location.path('/dashboard');
        });
    }

});