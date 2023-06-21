import { Modal, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';

const MessageModal = ({ titleMsg }) => {
    const titleMessage = titleMsg[0].title
    const [showModal, setShowModal] = useState(false);
    const [msg, setMsg] = useState("")
    const [title, setTitle] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const handleClose = () => {
      setShowModal(false)
      setErrorMsg("")
      setTitle("")
      setMsg("")
    };

    const submitModal = () => {
      if( !msg){
         return setErrorMsg("Vänligen fyll in den tomma rutan *")
      }
      axios.post("http://localhost:4000/sendmessage", {
        recieverName: titleMsg[0].username,
        title: titleMessage,
        message: msg
      }).then((res) => {
        console.log(res)
        setShowModal(false)
        alert("Ditt meddelande har skickats!")
        setTitle("")
        setMsg("")
      }).catch((err) => {
        setErrorMsg(err.response.data.message)
      })
     
      
    }

    useEffect(() => {
      setErrorMsg("")
    },[title, msg])
  
    return (
        <div>
         
          <button
          className='border border-black px-6 py-2 rounded m-2 w-[400px] hover:text-gray-500 duration-100'
          onClick={() => setShowModal(true)}>Kontakta säljaren</button>
                      <Modal show={showModal} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title > Ämne </Modal.Title>
   
  </Modal.Header>
  <Modal.Body>
    <Form.Group controlId="messageForm">
      <Form.Control className='h-[10px]'
        as="textarea"
        value={titleMsg[0].title}
        onChange={(e) => setTitle(e.target.value)}
      
      
        
      />
    </Form.Group>
  </Modal.Body>
  <Modal.Body>
  <Modal.Title className='mb-2'>Ditt meddelande</Modal.Title>
    <Form.Group controlId="messageForm">
      <Form.Control className='h-[200px]'
        as="textarea"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      
        
      />
    </Form.Group>
    <p className=' flex justify-center text-red-400 mt-1 h-[30px]'>{errorMsg}</p>
  </Modal.Body>
  
  <Modal.Footer>
   
    <button 
    onClick={submitModal}
    className="bg-blue-500 text-white font-bold p-2 rounded w-[150px]" variant="primary">
      Skicka
    </button>
  </Modal.Footer>
</Modal>
        </div>
    )
}

export default MessageModal