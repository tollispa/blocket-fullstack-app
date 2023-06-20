const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
 
    username: {
        type: String,
        required: true
    }, title: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    createdAtDate: {
        type: String,
        required: true
    }
},{ strict: "throw" })
const Post = mongoose.model('Posts', postSchema);

module.exports = Post