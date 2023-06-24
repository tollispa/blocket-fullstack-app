import axios from "axios"
import {useEffect} from "react"
import {Link} from "react-router-dom"

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

   const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength - 3) + "[ . . ]";
      }
      return text;
   }

   const reversedMessages = [...message].reverse()
    return (
        <div className="w-[700px] h-auto  pb-10 flex flex-col ">
            
            {reversedMessages.map((messages) => {
                return ( 
                    <Link className="no-underline text-black" to={`/singlemessages/${messages._id}`}>
                    <div key={messages._id} className="flex flex-col rounded p-2 bg-gray-50 items-center border-b border-gray-300 m-2 relative justify-center align-center">
                        <p className="font-bold ">Ämne: <span className="font-normal">{messages.title}</span></p>
                        <p className="no-underline">{truncateText(messages.message, 35)}</p>
                        <p className="absolute top-0 left-5">Från: <span className="text-blue-400 underline">{messages.from}</span></p>
   
                        <button className="text-white bg-gray-800 rounded p-2 w-[20%] hover:bg-gray-600">Svara</button>
                        <p className="text-gray-400 absolute bottom-0 right-2 text-sm">{messages.sendAtDate}</p>

                    </div></Link>
                )
            })}
        </div>
    )
}

export default Messages