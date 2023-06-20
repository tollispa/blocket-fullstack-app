import {TextField} from "@mui/material"
import {  MenuItem, Select } from "@mui/material";
import {useState} from "react"
import axios from "axios"
const CreatePost = () => {
    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [price, setPrice] = useState("")

   const onSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/createpost", {
      category: category,
      title: title,
      desc: desc,
      price: price
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
   }



    return (
        <div className=" w-full h-screen flex justify-center">
            <div className="h-[500px] text-white bg-gray-100">
            <form
            onSubmit={onSubmit}
            className="flex flex-col p-4 m-2">
            <Select className="bg-white" style={{marginBottom: "20px"}}
          labelId="gender-label"
          id="gender-select"
          value={category}
          displayEmpty
          onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="">
    <em>Välj kategori</em>
  </MenuItem>
          <MenuItem value="Kläder">Kläder</MenuItem>
          <MenuItem value="Möbler">Möbler</MenuItem>
          <MenuItem value="Personligt">Personligt</MenuItem>

        </Select>
            <TextField id="outlined-basic" variant="outlined" label="Rubrik" className="bg-white mb-4"
             style={{marginBottom: "10px"}}
             onChange={(e) => setTitle(e.target.value)}
             />
            <TextField id="outlined-basic" variant="outlined" label="Beskrivning" className="bg-white"
             onChange={(e) => setDesc(e.target.value)}
             style={{marginBottom: "10px"}}/>
            <TextField id="outlined-basic" variant="outlined" label="Pris" className="bg-white"
             onChange={(e) => setPrice(e.target.value)}
             style={{marginBottom: "10px"}}/>
            <button>Lägg till annons</button>

            </form>
            </div>
          
        </div>
    )
}

export default CreatePost