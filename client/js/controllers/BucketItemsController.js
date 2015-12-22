myApp.controller('BucketItemsController', function ($location, $routeParams, UserFactory, BucketItemFactory) {
    var _this = this;
    var currentUser;
    var users;

    this.index = function () {
        UserFactory.index(function (output) {
            _this.users = output;
        })
        _this.getCurrentUser();
    }

    this.getCurrentUser = function () {
        UserFactory.getCurrentUser(function (data) {
            if (data) {
                UserFactory.show(data._id, function (populatedUser) {
                    _this.currentUser = populatedUser;
                });// end show
            } else {
                $location.path('/');
            }
        });
    }

    // Create a new BucketItem, receive that item back as data
    // Insert that BucketItem into the current user's bucket list
    // If newBucketItem.taggedUser is not null, insert that item into that 
    // person's bucket list
    this.createBucketItem = function () {
        var taggedUser = _this.newBucketItem.taggedUser;
        BucketItemFactory.create(_this.newBucketItem, function (data) {
            // Take newly created bucketItem and update user who created it
            UserFactory.update(_this.currentUser, data, function () {});
            // If tagged user exists, also update taggedUser
            if (taggedUser != null) {
                UserFactory.update(taggedUser, data, function () {})
            }
            _this.newBucketItem = {};
        });
    }

    this.index();

});