import {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'
import {Link} from "react-router-dom"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MessageModal from '../assets/MessageModal';

const SinglePost = () => {
    const [posts, setPosts] = useState([])
    const {id} = useParams()
    useEffect(() => {
            axios.get(`http://localhost:4000/singlepost/${id}`)
            .then((res) => {
                setPosts(res.data)
                console.log("Ok")
            })
    }, [id])

    return (
        <div className='flex flex-col w-full h-screen items-center'>
            <div>
       
          
           {posts.length === 0 ? <p>User has no posts!</p> : posts.map((post) => {
            return (
                <div className='text-xl min-w-[950px] h-auto flex relative flex-col items-center shadow-lg p-4 m-2 rounded' key={post._id}>
                    <p className='absolute top-0 right-3 cursor-pointer'>Säljes av: <br/> <span className=''>{post.username}</span></p>
                    <p className='text-gray-400'>{post.category}</p>
                    <img className="h-full w-[350px] rounded" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg" alt=""/>
                <p className='font-bold m-4'>{post.title}</p>
                <p className='font-bold mb-2'>Beskrivning</p>
                <p className='bg-gray-50 text-gray-800 p-2 rounded'>{post.description}</p>
              
                <p className='font-bold mt-10 text-2xl'>{post.price}kr</p>
                <p className='absolute bottom-0 right-3 text-gray-400'>{post.createdAtDate}</p>
                <button className='bg-blue-500 rounded px-6 py-2 m-2 text-white w-[400px] hover:bg-blue-400 duration-100'>Köp med frakt och köpskydd</button>
                <MessageModal titleMsg={posts}/>
                
            
                </div>
            )
           })}
           <Link  className="underline text-blue-400 m-2 hover:text-blue-300" to="/posts"> <KeyboardBackspaceIcon fontSize='4x'/> Tillbaka till alla annonser</Link>
           </div>
        </div>
    )
}

export default SinglePost