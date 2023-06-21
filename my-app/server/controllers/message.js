const express = require("express");
const sendMessage = express.Router();
const user = require("../schemas/user")
const Message = require("../schemas/message")


const formattedDate = require("../dateVariable")

sendMessage.post("/", async (req, res) => {
    const messageSent = req.session.userId
    const {recieverName, title, message} = req.body
    if(!messageSent){
        return res.status(401).send({message: "Du måste vara inloggad för att skicka meddelande"})
    }

  try {
        
        const findUser = await user.find({ _id: `${messageSent}` }).lean().select('username').exec()
   
        console.log(findUser[0].username, recieverName, title, message, formattedDate)
    const createMessage = new Message({
            from: findUser[0].username,
            to: recieverName,
            title: title,
            message: message,
            sendAtDate: formattedDate
          
        });
    await createMessage.save();
        res.send({message: "Meddelandet skickades!"})
        
    } catch (err) {
        
        res.send(err)
    }
   
} )

module.exports = sendMessage