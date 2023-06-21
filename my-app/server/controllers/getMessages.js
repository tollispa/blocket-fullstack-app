const express = require("express");
const getMessages = express.Router();
const Message = require("../schemas/message")
const user = require("../schemas/user")


getMessages.get("/",  async (req, res) => {
    const userId = req.session.userId
   if(!userId) {
    return res.status(404).send({message: "Logga in för att se dina meddelanden"})
   }
  try {
    const findUser = await user.find({ _id: `${userId}` }).lean().select('username').exec()
    
    const posts = await Message.find({to: `${findUser[0].username}`})
    res.send(posts)

  } catch(err){
    res.send(err)
  } 


})

module.exports = getMessages

