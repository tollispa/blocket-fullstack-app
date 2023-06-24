const express = require("express");
const deletePost = express.Router();
const Post = require("../schemas/post")
const user = require("../schemas/user")

deletePost.delete("/", async (req, res) => {
    const itemID = req.body.id
    const userID = req.session.userId

   if(!userID){
    return res.sendStatus(401)
   }
    const result = await user.find({_id: `${userID}`});
    const userIdAndPostIdMatch = await Post.findOne({_id: `${itemID}`, username: `${result[0].username}`})
   
    if(!userID ||!userIdAndPostIdMatch){
        return res.sendStatus(401)
    }
  
    try {

        const deletePost = await Post.findOneAndDelete({_id: `${itemID}`})
       
        res.send({message: "Post deleted!"})
    }catch(err) {
        res.sendStatus(500)
    }
})

module.exports = deletePost