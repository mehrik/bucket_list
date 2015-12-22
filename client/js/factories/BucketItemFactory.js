myApp.factory('BucketItemFactory', function ($http) {
    var factory = {};
    var _UF = this;

    factory.create = function (newBucketItem, callback) {
        $http.post('/bucketItem', newBucketItem).success(function (output) {
            if (!output.errors) {
                callback(output);
            } else { 
                console.log('You have errors for BIFactory!', output);
            }
        });
    } 

    factory.update = function (bucketItem, callback) {
        $http.post('/bucketItem/'+bucketItem._id, bucketItem).success(function (output) {
            if (!output.errors) {
                callback(output);
            } else {
                console.log('You have errors in BIFactory!', output);
            }
        });
    }

    return factory;
});