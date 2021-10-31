import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from './../../hooks/useAuth';
import headerlogo from '../../images/designpics/headerlogo.png'
import { HashLink } from 'react-router-hash-link';


const Header = () => {

    const { user, logOut } = useAuth()

    const [menuStyle, setMenuStyle] = useState("none")

    const handleToggle = () => menuStyle === "none" ? setMenuStyle("flex") : setMenuStyle("none")

    return (
        <div className="text-white bg-gray-400 bg-opacity-50 absolute w-full z-10 flex h-24 items-center justify-between">


            <img src={headerlogo} className="md:w-48 w-32 self-start " alt="" />

            <div className="flex-grow md:flex justify-start space-x-4 ml-5 hidden">


                <Link to="/home"><button className="btn">Home</button></Link>


                <Link to="/destinations"> <button className="btn">Destinations</button ></Link>

                <HashLink to="/home#about"> <button className="btn">About</button ></HashLink>


            </div>


            <div className="md:flex items-center  hidden space-x-4 px-5">

                {user.email && <Link to={`/userPage/${user.email}`}> <button className="btn">Visit your page: {user.email} </button> </Link>}

                {!user.email && <Link to="/login"> <button className="btn">Login</button></Link>}

                <Link to="/admin"> <button className="btn">Admin</button ></Link>
                {user.email && <button className="btn" onClick={logOut}>LogOut</button>}


            </div>

            <i onClick={handleToggle} className="fas fa-bars block text-5xl md:hidden mr-5 cursor-pointer"></i>

            <div style={{ display: `${menuStyle}` }} className=
            "absolute bg-yellow-50 flex-col top-24 right-0 text-right text-indigo-700 p-5 bg-opacity-80 "
            >

                <Link to="/home"><button className="p-2 font-bold">Home</button></Link>


                <Link to="/destinations"> <button className="font-bold p-2" n>Destinations</button ></Link>

                <HashLink to="/home#about"> <button className=" font-bold p-2">About</button ></HashLink>

                {user.email && <Link to={`/userPage/${user.email}`}> <button className=" font-bold p-2">Visit your page: {user.email} </button> </Link>}

                {!user.email && <Link to="/login"> <button className=" font-bold p-2">Login</button></Link>}

                <Link to="/admin"> 
                <button className="font-bold p-2">Admin</button >
                </Link>

                {user.email && <button className=" font-bold p-2" onClick={logOut}>LogOut</button>}


            </div>

        </div >
    )
}

export default Header
