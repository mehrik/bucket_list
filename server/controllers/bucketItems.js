var mongoose = require('mongoose');
var BucketItem = mongoose.model('BucketItem');

module.exports = (function() {
    return {
        index: function (req, res) {
            res.json('bucketItems.index');
        },
        create: function (req, res) {
            var bucketItem = new BucketItem({
                title: req.body.title,
                description: req.body.description
            });
            bucketItem.save(function (err, createdBucketItem) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(createdBucketItem);
                }// end if
            });// end save
        },// end create  
    }
})();