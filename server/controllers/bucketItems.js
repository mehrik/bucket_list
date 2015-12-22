var mongoose = require('mongoose');
var BucketItem = mongoose.model('BucketItem');

module.exports = (function() {
    return {
        index: function (req, res) {
            res.json('bucketItems.index');
        },
        create: function (req, res) {
            res.json('bucketItems.create');
        },  
    }
})();