import {TextField} from "@mui/material"
import {Link} from "react-router-dom"
import axios from "axios"
import { useState} from "react"

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const registerAccount = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/register", {
            username: username,
            password: password
        }).then((res) => {
            console.log(res)
        }).catch(err => console.log(err))
    }
    return (
       
                   <div className="w-full h-[650px] bg-gray-100 flex justify-center items-center">
            <form onSubmit={registerAccount} className="flex flex-col w-[400px] items-center">
                <TextField id="outlined-basic" variant="outlined" label="Användarnamn" 
                    onChange={e => setUsername(e.target.value)}
                className="bg-white w-[50%]"/>
                <TextField id="outlined-basic" variant="outlined" label="Lösenord" 
                    onChange={e => setPassword(e.target.value)}
                className="bg-white w-[50%]"/>
                <TextField id="outlined-basic" variant="outlined" label="Skriv ditt lösenord igen" 
                className="bg-white w-[50%]"/>
                <button 
                className="bg-blue-400 p-2 text-white font-bold rounded mt-2 w-[50%]"
                >Registrera</button>
              <p className=" mt-2">Har du redan ett konto? Gå till <Link to="/login" className="underline text-blue-500">logga in</Link></p>
            </form>
            
        </div>
       
    )
}

export default Register