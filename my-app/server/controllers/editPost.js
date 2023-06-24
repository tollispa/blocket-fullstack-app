const express = require("express");
const editPost = express.Router();
const Post = require("../schemas/post")
const user = require("../schemas/user")

editPost.put("/", async (req, res) => {
 const userID = req.session.userId
 const {id, title, description,  price, image} = req.body
 if(!userID){
    return res.sendStatus(400)
 }
 const result = await user.find({_id: `${userID}`});
 const checkIfUserIsAuthToEdit = await Post.findOne({_id: `${id}`, username: `${result[0].username}`})
 
 if(!checkIfUserIsAuthToEdit){
    return res.sendStatus(401)
 }
try {
    const uptade = await Post.findByIdAndUpdate(id, {title: `${title}`, price:`${price}`, description:`${description}`, picture:`${image}`})
   res.sendStatus(200)

}catch(err){
    console.log(err)
}
})

module.exports = editPost