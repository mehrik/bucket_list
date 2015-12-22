var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2, unique: true},
    BucketItems: [{type: Schema.ObjectId, ref: 'BucketItem'}],
});

var User = mongoose.model('User', UserSchema);