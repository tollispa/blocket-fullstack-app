import {TextField} from "@mui/material"

const Home = () => {
    return (
        <div 
        className="w-full  rounded h-screen bg-cover bg-center items-center justify-center hidden sm:flex"
        style={{backgroundImage: `url("https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80")`}}>
           
            <div className="bg-white flex p-3 shadow-lg rounded">
                <TextField className="w-[400px]" variant="outlined" label="Vad letar du efter?"/>
                <button className="bg-red-400 rounded text-white p-2 mr-1 ml-4 hover:bg-red-500 w-[120px]">Köpa</button>
                <p className="pt-4 ml-3 mr-3">Eller</p>
                <button className="bg-red-400 rounded text-white p-2 mr-1 ml-1 hover:bg-red-500 w-[120px] ">Sälja</button>
            </div>
          
        </div>
    )
}

export default Home