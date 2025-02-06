const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    list:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Todo', todoSchema)

