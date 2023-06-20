import Navbar from "./components/Navbar";
import Login from "./components/Login"
import Register from "./components/Register";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import axios from "axios"
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/createpost" element={<CreatePost/>}/>


    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
