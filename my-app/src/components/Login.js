import {TextField} from "@mui/material"
import {Link} from "react-router-dom"
import { useState } from "react"
import axios from "axios"


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginButton = (e) => {
        e.preventDefault()
       
        axios.post("http://localhost:4000/login", {
            
            username: username,
            password: password
        }).then((res) => {
            console.log(res)
           
            setPassword("")
            setUsername("")
         
            
            
        }).catch((err)=> {
            if(username === "" || password === "" ){
                return alert("Please fill the required fields!")
            }
            alert("! Try again!")
        })
    }

    
    return (
        <div className="w-full h-[650px] bg-gray-100 flex justify-center items-center">
            <form 
            onSubmit={loginButton}
            className="flex flex-col w-[400px] items-center">
                <TextField id="outlined-basic" variant="outlined" label="Användarnamn" 
                   onChange={e => setUsername(e.target.value)}
                className="bg-white w-[50%]"/>
                <TextField id="outlined-basic" variant="outlined" label="Lösenord" 
                   onChange={e => setPassword(e.target.value)}
                className="bg-white w-[50%]"/>
                <button 
                className="bg-blue-400 p-2 text-white font-bold rounded mt-2 w-[50%]"
                >Logga in</button>
              <p className=" mt-2">Har du inget konto? Gå till <Link to="/register"className="underline text-blue-500">registera konto</Link></p>
            </form>
            
        </div>
    )
}

export default Login