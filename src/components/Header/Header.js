import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from './../../hooks/useAuth';


const Header = () => {

    const { user, logOut } = useAuth()

    return (
        <div>

            <div className="flex h-16 items-center border-solid border-4 border-light-blue-500 mb-5">
                <div className="flex-grow flex justify-start space-x-4 ml-5">

                    <Link to="/home"><button className="btn">Home</button></Link>


                    <Link to="/destinations"> <button className="btn">Destinations</button ></Link>
                
                
                </div>


                <div className="flex items-center  space-x-4 px-5">
                    <span>Logged in as: {user.email}</span>
                    <Link to="/login"> <button className="btn">Login</button></Link>

                    <Link to="/admin"> <button className="btn">Admin</button ></Link>
                    <button className="btn" onClick={logOut}>LogOut</button>
                </div>

            </div>


        </div>
    )
}

export default Header
