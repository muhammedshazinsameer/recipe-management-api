const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/tasks");
        console.log("database is connected")
    } catch (error) {
        console.log("Error in connections")
    }
}

module.exports= connectDB;