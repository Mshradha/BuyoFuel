const mongoose = require("mongoose");


const userScheme = new mongoose.Schema({
    task : String,
    status : Boolean
})

const TodoModal = mongoose.model('todo', userScheme);

module.exports = TodoModal