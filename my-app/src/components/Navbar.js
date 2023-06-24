import {Link} from "react-router-dom"

const Navbar = (props) => {
    

    return (
        <div className="border-b-2 h-auto w-full text-gray-600">
            
            <ul className="flex justify-end gap-4 m-2">
            <Link to="/" className="text-red-400 font-bold text-4xl absolute left-5 cursor-pointer no-underline">Blocket .</Link>
            <Link to="/createpost" className="no-underline p-2 mr-3 bg-blue-400 text-white font-bold rounded hover:bg-blue-300 cursor-pointer">
                    Lägg till annons +
                </Link >
                <Link to="posts" className="no-underline  text-xl cursor-pointer hover:text-blue-300 duration-200 hover:border-b-2 hover:border-blue-300">
                    Annonser
                </Link >
                <Link to="/messages" className="no-underline  text-xl cursor-pointer hover:text-blue-300 duration-200 hover:border-b-2 hover:border-blue-300">
                   Meddelanden {props.messages ? <span className="text-red-500">({props.messages.length})</span> : null }
                </Link>  
                {!props.user ? <Link to="/login"className="no-underline  text-xl cursor-pointer hover:text-blue-300 duration-200 hover:border-b-2 hover:border-blue-300">
                    Konto
                </Link> : null }
                {props.user ? <Link to="/login" className="no-underline  text-xl cursor-pointer hover:text-blue-300 duration-200 hover:border-b-2 hover:border-blue-300">{props.user} Konto</Link>: null}
            </ul>
        </div>
    )
}

export default Navbar