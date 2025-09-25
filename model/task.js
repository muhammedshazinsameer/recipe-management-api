const mongoose =require('mongoose')

const newSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Task",newSchema)