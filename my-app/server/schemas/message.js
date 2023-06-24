const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
 
    from: {
        type: String,
        required: true
    }, title: {
        type: String,
        required: true
    },
    
    to: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    sendAtDate: {
        type: String,
        required: true
    },
    response: {
        fromReciever: {
            type: Array,
            sendAtDate: String,
            default: []
        },
        fromUser: {
            type: Array,
            sendAtDate: String,
            default: []
        }
    }
},{ strict: "throw" })
const Message = mongoose.model('Messages', messageSchema);

module.exports = Message