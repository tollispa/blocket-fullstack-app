import Navbar from "./components/Navbar";
import Login from "./components/Login"
import Register from "./components/Register";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import axios from "axios"
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import SinglePost from "./components/SinglePost";
import { useEffect, useState } from "react";

import Messages from "./components/Messages";
import Home from "./components/Home";
import SingleMessages from "./components/SingleMessages";



function App() {
  axios.defaults.withCredentials = true;
  const [loggedInUser, setLoggedInUser] = useState("")

  useEffect(() => {
    axios.get("http://localhost:4000/isLoggedIn")
    .then((res) => {
        if(res.status === 200) {
         
            setLoggedInUser(res.data) 
            
            
        }
        console.log(res)
    }).catch((err) => console.log(err))
}, [])

const [messages, setMessages] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:4000/getmessages")
    .then((res) => {
        setMessages(res.data)
        
    }).catch((err) => console.log(err))
   
},[loggedInUser])




  return (
    <>
    <BrowserRouter>
    <Navbar user={loggedInUser} messages={messages}/>
    <Routes>
      <Route path="/login" element={<Login user={loggedInUser}/>}/>
      <Route path="/" element={<Home/>}/>

      <Route path="/register" element={<Register/>}/>
      <Route path="/posts" element={<Posts user={loggedInUser}/>}/>
      <Route path="/createpost" element={<CreatePost/>}/>
      <Route path="/singlemessages/:id" element={<SingleMessages/>}/>

      <Route path="/post/:id" element={<SinglePost user={loggedInUser}/>}/>
      <Route path="/messages" element={<Messages message={messages}  setMessages={setMessages}/>}/>




    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
