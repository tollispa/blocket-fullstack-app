const express = require("express")
const cors = require("cors")
const session = require("express-session")
const database = require("./database")
const register = require("./Auth/register")
const login = require("./Auth/login")
const createPost = require("./controllers/createPost")
const getPosts = require("./controllers/getPosts")
const getSinglePost = require("./controllers/singlePost")
const sendMessage = require("./controllers/message")
const getMessages = require("./controllers/getMessages")



const app = express()



app.use(express.json())
database()
app.use(session({
    key: "userId",
    secret: "mysecret",
    resave: false,
    saveUninitialized: false,
    
    cookie: {
        domain: "localhost",
        path: "/",
        maxAge: 1000 * 60 * 24,
        httpOnly: true
      
    },
}));

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true
}));


app.use("/register", register)
app.use("/login", login)
app.use("/createpost", createPost)
app.use("/getposts", getPosts)
app.use("/singlepost", getSinglePost)
app.use("/sendmessage", sendMessage)
app.use("/getmessages", getMessages)

app.get("/isLoggedIn", (req, res) => {
    if (!req.session.userId) {
        res.sendStatus(404)
    }else {
        res.send(req.session.username)
    }
})

app.listen(4000, () => {
    console.log("Server started on port 4000")
})
