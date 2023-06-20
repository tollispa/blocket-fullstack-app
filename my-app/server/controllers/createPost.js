const express = require("express");
const createPost = express.Router();
const user = require("../schemas/user")
const Post = require("../schemas/post")

const formattedDate = require("../dateVariable")


createPost.post("/", async (req, res) => {
    const userID = req.session.userId
    if(!userID) {
        return res.sendStatus(401)
    }
   
    const {header, desc, category, price, picture } = req.body

 
   const findName = await user.find({_id: `${userID}`}).lean().select('username').exec()
   
   const createPostData = {
  
    username: findName[0].username,
    header: header,
    description: desc,
    category: category,
    price: price,
    picture: picture,
    createdAtDate: formattedDate
  
  };
  
  const createPost = new Post(createPostData);
    try {
      
       
        await createPost.save()
        res.send({message: "Post created!"})
        
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = createPost
