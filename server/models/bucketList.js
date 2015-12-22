var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BucketItemSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 5},
    description: {type: String, required: true, minlength: 10},
    created_at: {type: Date, default: Date.now}
});

var BucketItem = mongoose.model('BucketItem', BucketItemSchema);