import {Link} from "react-router-dom"

const Navbar = (props) => {
    return (
        <div className="border-b-2 h-auto w-full text-gray-600 relative">
            
            <ul className="flex justify-end gap-4 m-2">
            <Link to="/" className="text-red-400 font-bold text-4xl absolute left-5 cursor-pointer no-underline">Blocket .</Link>
            <Link to="/createpost" className="no-underline p-2 mr-3 bg-blue-400 text-white font-bold rounded hover:bg-blue-300 cursor-pointer">
                    Lägg till annons +
                </Link >
                <Link to="posts" className="no-underline font-bold text-xl cursor-pointer hover:text-orange-400 duration-300 hover:border-b-2 hover:border-orange-400">
                    Annonser
                </Link >
                <Link className="no-underline font-bold text-xl cursor-pointer hover:text-orange-400 duration-300 hover:border-b-2 hover:border-orange-400">
                   Meddelanden
                </Link>  
                {!props.user ? <Link to="/login"className="no-underline font-bold text-xl cursor-pointer hover:text-orange-400 duration-300 hover:border-b-2 hover:border-orange-400">
                    Konto
                </Link> : null }
                {props.user ? <Link to="/login" className="no-underline font-bold text-xl cursor-pointer hover:text-orange-400 duration-300 hover:border-b-2 hover:border-orange-400">{props.user} Konto</Link>: null}
            </ul>
        </div>
    )
}

export default Navbar