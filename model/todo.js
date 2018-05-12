var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    task: String,
    status: {type: Boolean, default: false}
},
{
    timestamps: true
});

module.exports = mongoose.model('todo', todoSchema);