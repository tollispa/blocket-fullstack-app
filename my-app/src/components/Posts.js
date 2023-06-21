import axios from "axios"
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

const Posts = (props) => {
    const [posts, setPosts] = useState([])
    const loggedInUser = props.user
   
   
    useEffect(() => {
        axios.get("http://localhost:4000/getposts")
        .then((res) => {
            setPosts(res.data)
        }).catch((err)=> console.log(err))
    },[])

    if(posts.length === 0){
        return <p className="flex justify-center font-bold text-4xl m-4 text-red-400">Database not running</p>
    }
    const reversedPosts = [...posts].reverse()
   
    return (
        <div className="flex flex-col justify-center items-center">
         { reversedPosts.map((post) => {
            return (
                <div key={post._id} className="relative mb-4 mt-1 p-3 border-b border-gray-800 max-w-[1000px] w-full text-center">
                    <img className="absolute left-0 top-5 rounded h-[150px]" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg" alt=""/>
                   <p className="absolute right-0 top-0">Skapad av: <span className="text-blue-400 underline cursor-pointer">{post.username}</span></p> 
                   <p className="font-bold mb-4"> <span className="text-gray-400 font-normal">{post.category}</span></p>
                   <p className="font-bold">Titel <span className="font-normal">- {post.title}</span></p>
                   <p>{post.description}</p>
                   <p className="font-bold mt-6">{post.price}kr</p>
                   <p className="absolute bottom-0 right-10 text-gray-500">{post.createdAtDate}</p>
                   <Link to={`/post/${post._id}`} className="underline text-blue-400">Gå till annons</Link>
                {loggedInUser === post.username ? <button className="block bg-red-500 text-white p-2 rounded">Ta bort annons</button> : null}
                    </div>
            )
          })}
        </div>
    )
}

export default Posts