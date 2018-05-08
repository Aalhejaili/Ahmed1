const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const PostSchema = new Schema({
    user: {
        type: Schema.Types.Objected,
        ref: "users"
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    avatar: {
        type: String
        //required: true // getting from gravatar
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema);