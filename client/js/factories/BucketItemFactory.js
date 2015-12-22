myApp.factory('BucketItemFactory', function ($http) {
    var factory = {};
    var _UF = this;

    factory.create = function (newBucketItem, callback) {
        $http.post('/bucketItem', newBucketItem).success(function (output) {
            if (!output.errors) {
                callback(output);
            } else { 
                console.log('You have errors for BICfactory!', output);
            }
        });
    } 

    return factory;
});