import { Modal, Form } from 'react-bootstrap';
import {  useState } from 'react';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.css';

const EditPostModal = ({id, setPosts, posts}) => {
 
    const [showModal, setShowModal] = useState(false);
    
    const [title, setTitle] = useState(posts[0].title)
    const [desc, setDesc] = useState(posts[0].description)
    const [price, setPrice] = useState(posts[0].price)
    const [image, setImage] = useState(posts[0].picture)
    

  

    const handleClose = () => {
      setShowModal(false)
     
     
    };

    const submitModal = (e) => {
   e.preventDefault()
        
      axios.put("http://localhost:4000/editpost", {
        id: id,
        title: title,
        description: desc,
        price: price,
        image: image
       
      }).then((res) => {
       axios.get(`http://localhost:4000/singlepost/${id}`)
       .then((res) => {
        setPosts(res.data)
       })
        setShowModal(false)
        
       
        setTitle("")
       
      }).catch((err) => {
        alert("Något gick fel!")
      })
     
      
    }


    return (
        <div>
         
          <button
          className='rounded mt-3 p-2 border-1 w-[200px] border-gray-700 hover:shadow-lg hover:border-gray-800 hover:text-gray-600 duration-300'
          onClick={() => setShowModal(true)}>Redigera annons</button>
                      <Modal show={showModal} onHide={handleClose} className='w-'>
  <Modal.Header closeButton>
    <Modal.Title > Redigera</Modal.Title>
   
  </Modal.Header>
  <Modal.Body>
  <Modal.Title > Titel</Modal.Title>
    <Form.Group controlId="messageForm">
      <Form.Control className='h-[10px]'
        as="textarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      
      
        
      />
      
    </Form.Group>
  </Modal.Body>
  
  <Modal.Body>
  <Modal.Title > Beskrivning</Modal.Title>
    <Form.Group controlId="messageForm">
      <Form.Control className='h-[10px]'
        as="textarea"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      
      
        
      />
      
    </Form.Group>
  </Modal.Body>
  <Modal.Body>
  <Modal.Title >Pris</Modal.Title>
    <Form.Group controlId="messageForm">
      <Form.Control className='h-[10px]'
        as="textarea"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      
      
        
      />
      
    </Form.Group>
  </Modal.Body>
  <Modal.Body>
  <Modal.Title > Ny bild</Modal.Title>
    <Form.Group controlId="messageForm">
      <Form.Control className='h-[10px]'
        as="textarea"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      
      
        
      />
      
    </Form.Group>
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

export default EditPostModal