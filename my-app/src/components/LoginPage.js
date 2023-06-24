import axios from "axios"

const LoginPage = ({user}) => {
    const logout = () => {
        axios.get("http://localhost:4000/logout")
        .then((res) => {
          console.log(res)
          window.location.reload()
        
        })
    }
  
    
    return (
        <div className="w-full flex flex-col h-screen bg-slate-50 items-center relative">
            <h1 className="text-gray-500 text-3xl mt-1">Välkommen {user}!</h1>
            <button 
            onClick={logout}
            className="bg-red-500 text-white rounded p-2 w-[200px] absolute top-2 right-2 hover:bg-red-400 hover:shadow-lg duration-200">Logga ut</button>
        </div>
    )
}

export default LoginPage