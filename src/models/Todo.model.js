const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        trim:true 
    },
    is_completed:{
        type:Boolean,
        default:false
    }
})


exports.Todo = mongoose.model("Todo", TodoSchema);