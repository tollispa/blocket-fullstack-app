import {useParams, Link} from "react-router-dom"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import axios from "axios"
import {useEffect, useState} from "react"
const SingleMessages = () => {

    const [message, setMessage] = useState([])
    const {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:4000/singlemsg/${id}`)
        .then((res) => {
            setMessage(res.data)
        }).catch(err => console.log(err))
    },[])

    return (
        <div className="w-full flex flex-col items-center relative">
            <Link to="/messages" className="absolute left-10 top-2"><KeyboardBackspaceIcon fontSize="4"/>Tillbaka till meddelanden</Link>
           
            <div className="relative bg-gray-100 w-[500px] h-auto p-6 rounded m-1">
  {message.map((messages) => {
    return (
      <div key={messages._id}>
        <p className="font-bold text-m">Titel - {messages.title}</p>

        <p className="absolute top-1 right-2 text-s text-gray-500">Från: <span className="text-blue-400 underline">{messages.from}</span></p>
        
        <div className="flex flex-col">
          <p className="rounded px-4 py-1 text-white bg-blue-400">{messages.message}</p>
          <br/>
          {messages.response.fromReciever.map((recieverMessage, index) => (
            <p key={index} className="rounded px-4 py-1 text-white bg-green-400 inline-block items-end">{recieverMessage}</p>
          ))}
          <br/>
          <p className="rounded px-4 py-1 text-white bg-blue-400 inline-block">{messages.response.fromUser}</p>
        </div>

        <p className="absolute bottom-0 right-2 text-sm text-gray-400">{messages.sendAtDate}</p>
      </div>
    );
  })}
</div>

            
        </div>
    )
}

export default SingleMessages