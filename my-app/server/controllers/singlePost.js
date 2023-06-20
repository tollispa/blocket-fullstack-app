const express = require("express");
const getSinglePost = express.Router();
const Post = require("../schemas/post")


getSinglePost.get("/:id",  async (req, res) => {
    const id = req.params.id
    
const posts = await Post.find({_id: `${id}`})

res.send(posts)
})

module.exports = getSinglePost
