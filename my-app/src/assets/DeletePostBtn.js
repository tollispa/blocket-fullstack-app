import axios from "axios"

const DeletePostBtn = ({ id, setPosts }) => {
    const deletePost = () => {  
        axios.delete("http://localhost:4000/deletepost", {
          data: {
            id: id
          }
        }).then((res) => {
          console.log(res)
          return axios.get("http://localhost:4000/getposts");
         
        }).then((res) => {
          setPosts(res.data)
        })

      }
    return (
       
            <button 
            className="block bg-red-500 w-[200px] text-white py-2 px-4 rounded duration-200 hover:bg-red-400 hover:shadow-lg"
            onClick={deletePost}>Ta bort annons</button>
       
    )
}

export default DeletePostBtn