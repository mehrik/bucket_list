myApp.controller('UsersController', function ($location, $routeParams, UserFactory) {
    var _this = this;
    var displayUser;
    var currentUser;

    // Send information to UF.create
    // After success, redirect to the dashboard
    this.create = function () {
        UserFactory.create(_this.newUser, function () {
            $location.path('/dashboard');
        });
    }

    this.getCurrentUser = function () {
        UserFactory.getCurrentUser(function (data) {
            if (data) {
                _this.currentUser = data;
            } else {
                $location.path('/');
            }// end if
        });
    }

    this.statusChange = function (bucketItem) {
        BucketItemFactory.update(bucketItem, function () {
            _this.index();
        });
    }

    if($routeParams) {
        UserFactory.show($routeParams.id, function (data) {
            _this.displayUser = data;
        });
        _this.getCurrentUser();

    }

});