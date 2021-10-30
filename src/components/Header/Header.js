import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from './../../hooks/useAuth';
import headerlogo from '../../images/designpics/headerlogo.png'

const Header = () => {

    const { user, logOut } = useAuth()

    return (
        <div className="text-white bg-gray-400 bg-opacity-50 absolute w-full z-10">

            <div className="flex h-16 items-center ">

                <img src={headerlogo} className="w-48 self-start " alt="" />

                <div className="flex-grow flex justify-start space-x-4 ml-5">


                    <Link to="/home"><button className="btn">Home</button></Link>


                    <Link to="/destinations"> <button className="btn">Destinations</button ></Link>


                </div>


                <div className="flex items-center  space-x-4 px-5">

                    {user.email && <Link to={`/userPage/${user.email}`}> <button className="btn">Visit your page: {user.email} </button> </Link>}

                    {!user.email && <Link to="/login"> <button className="btn">Login</button></Link>}

                    <Link to="/admin"> <button className="btn">Admin</button ></Link>
                    {user.email && <button className="btn" onClick={logOut}>LogOut</button>}

                </div>

            </div>


        </div >
    )
}

export default Header
