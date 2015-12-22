myApp.controller('UsersController', function ($location, $routeParams, UserFactory) {
    var _this = this;
    var displayUser;

    // Send information to UF.create
    // After success, redirect to the dashboard
    this.create = function () {
        UserFactory.create(_this.newUser, function () {
            $location.path('/dashboard');
        });
    }

    if($routeParams) {
        UserFactory.show($routeParams.id, function (data) {
            _this.displayUser = data;
        });
    }

});