var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moduleSchema = new Schema({
    mid: String,
    pid: String,
    title: String,
    contributors: Object,
}, {
    timestamps: true
});

const Module = mongoose.model('Module', moduleSchema);
module.exports = Module;