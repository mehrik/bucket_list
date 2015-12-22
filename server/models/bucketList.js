var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BucketItemSchema = new mongoose.Schema({
    _user: {type: Schema.ObjectId, required: true},
    title: {type: String, required: true, minlength: 5},
    description: {type: String, required: true, minlength: 10},
    status: {type: String, required: true, default: 'pending'},
    created_at: {type: Date, default: Date.now}
});

var BucketItem = mongoose.model('BucketItem', BucketItemSchema);
var deepPopulate = require('mongoose-deep-populate')(mongoose);
BucketItemSchema.plugin(deepPopulate);