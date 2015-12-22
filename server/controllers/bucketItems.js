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
                description: req.body.description,
                _user: req.body._user
            });
            bucketItem.save(function (err, createdBucketItem) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(createdBucketItem);
                }// end if
            });// end save
        },// end create  
        update: function (req, res) {
            console.log(req.params.id);
            // console.log(req.body.change);
            BucketItem.findOne({_id: req.params.id}, function (err, bucketItem) {
                if (bucketItem.status == 'pending') {
                    bucketItem.status = 'done';
                    // console.log(bucketItem);
                } else {
                    // console.log('Should be done', bucketItem);
                    bucketItem.status = 'pending';
                }// end if
                bucketItem.save(function (err, bucketItem) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json(bucketItem);
                    }
                });// end save
            });// end findOne
        }
    }
})();