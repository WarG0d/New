var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    tid: String,
    mid: String,
    pid: String,
    title: String,
    email: String,
}, {
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;