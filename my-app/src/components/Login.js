import {TextField} from "@mui/material"
import {Link} from "react-router-dom"
import { useState, useEffect} from "react"
import axios from "axios"


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [loginMsg, setLoginMsg] = useState("")

    useEffect(() => {
        setErrMsg("")
      
    },[username, password])
    const loginButton = (e) => {
        e.preventDefault()

     
       
        axios.post("http://localhost:4000/login", {
            
            username: username,
            password: password
        }).then((res) => {
            console.log(res)
           setLoginMsg(res.data.message + "!")
            setPassword("")
            setUsername("")
         
            
            
        }).catch((err)=> {
            if(username === "" || password === "" ){
                return setErrMsg("Please fill the required fields!")
            }
            setErrMsg("Something went wrong!")
        })
    }

    
    return (
        <div className="w-full h-[650px] bg-gray-100 flex justify-center items-center">
            <form 
            onSubmit={loginButton}
            className="flex flex-col w-[400px] items-center shadow-lg rounded p-6 bg-white relative">
                  <p className="h-[40px] text-green-400 pt-2">{loginMsg}</p>
                <TextField id="outlined-basic" variant="outlined" label="Användarnamn" 
                   onChange={e => setUsername(e.target.value)}
                   style={{margin: "10px"}}
                    value={username}
                className="bg-white w-[50%]"/>
                <TextField id="outlined-basic" variant="outlined" label="Lösenord" 
                   onChange={e => setPassword(e.target.value)}
                   value={password}
                className="bg-white w-[50%]"/>
                
                <button 
                className="bg-blue-400 p-2 text-white font-bold rounded mt-2 w-[50%]"
                >Logga in</button>
                <p className="h-[50px] text-red-400 pt-2">{errMsg}</p>
              
              <p className=" mt-2 absolute bottom-2">Har du inget konto? Gå till <Link to="/register"className="underline text-blue-500">registera konto</Link></p>
            </form>
            
        </div>
    )
}

export default Login