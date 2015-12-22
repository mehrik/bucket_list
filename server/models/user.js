var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, unique: true},
    bucketItems: [{type: Schema.ObjectId, ref: 'BucketItem'}],
});

var User = mongoose.model('User', UserSchema);

var deepPopulate = require('mongoose-deep-populate')(mongoose);
UserSchema.plugin(deepPopulate);