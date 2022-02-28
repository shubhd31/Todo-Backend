const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    isChecked: {
        type: Boolean
    }
})

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;