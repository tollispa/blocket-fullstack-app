const express = require("express");
const login = express.Router();
const user = require("../schemas/user")

login.post("/", async (req, res) => {
  const name = req.body.username.toLowerCase()
  const pass = req.body.password
  
    if(req.session.userId) {
      return res.status(404).send({message: "Någon är redan inloggad!"})
    }
    try {
   
      const result = await user.find({username: `${name}`, password: `${pass}`});
      
      if (result.length === 0) {
        return res.status(400).send({message: "Fel namn/lösenord, försök igen"})   
      }
      req.session.userId = result[0].id;
      req.session.username = result[0].username
      res.send({message: "Inlogging lyckades"});
      
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
  });

  module.exports = login;