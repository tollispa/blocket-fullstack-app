import axios from "axios"
import {useState, useEffect} from "react"

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/getposts")
        .then((res) => {
            setPosts(res.data)
        })
    },[])


    return (
        <div className="flex flex-col justify-center items-center">
         { posts.map((post) => {
            return (
                <div key={post._id} className="p-3 border-b border-gray-800 max-w-[1000px] w-full text-center">
                   <p>{post.username}</p> 
                   <p>{post.category}</p>
                   <p>{post.header}</p>
                   <p>{post.price}</p>
                   <p>{post.createdAtDate}</p>

                    </div>
            )
          })}
        </div>
    )
}

export default Posts