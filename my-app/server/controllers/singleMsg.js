const express = require("express");
const getSingleMsg = express.Router();
const Post = require("../schemas/post")
const Message = require("../schemas/message")


getSingleMsg.get("/:id",  async (req, res) => {
    const id = req.params.id
    
const singleMsg = await Message.find({_id: `${id}`})

res.send(singleMsg)
})

module.exports = getSingleMsg
