import axios from "axios"
import {useEffect} from "react"

const Messages = ({message, fetchMessage, setMessages}) => {
    
    useEffect(() => {
        axios.get("http://localhost:4000/getmessages")
        .then((res) => setMessages(res.data))
        .catch((err) => setMessages(null))
     
     },[setMessages])
     if(!message) {
        return <h1 className="flex justify-center pt-6">Logga in för att se dina meddelanden!</h1>
     }
    
   if(message.length === 0){
    return <h1 className="flex justify-center pt-6">Du har inga meddelanden!  </h1>
   }

    return (
        <div className="w-[700px] h-auto  pb-10 flex flex-col ">
            
            {message.map((messages) => {
                return (
                    <div key={messages._id} className="flex flex-col rounded p-2 bg-gray-50 items-center border-b border-gray-300 m-2 relative justify-center align-center">
                        <p className="font-bold">Ämne: <span className="font-normal">{messages.title}</span></p>
                        <p>{messages.message}</p>
                        <p className="absolute top-0 left-5">Från: <span className="text-blue-400 underline">{messages.from}</span></p>
                        <button className="text-white bg-gray-800 rounded p-2 w-[20%] hover:bg-gray-600">Svara</button>

                    </div>
                )
            })}
        </div>
    )
}

export default Messages