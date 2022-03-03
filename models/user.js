var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: String,
    contact: String,
    otp: String,
    language: {
        type: String,
        enum: ["English", "Hindi"],
        default: "English"
    },
    email: String,
    username: String,
    password: String,
    registered: {
        type: Boolean,
        default: false
    },
    projects: Object,
    anotherNumber: String,
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);
module.exports = User;
