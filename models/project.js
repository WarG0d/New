var mongoose = require('mongoose');
const User = require('./user');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    pid: String,
    title: String,
    modules: Object,
    head: String,
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;