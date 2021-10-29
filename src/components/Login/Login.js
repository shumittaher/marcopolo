import React from 'react'
import useAuth from './../../hooks/useAuth';


const Login = () => {

    const { signInWithGoogle } = useAuth()

    return (
        <div className="items-center flex flex-col">


            <button className="btn" onClick={signInWithGoogle}> Sign In with Google</button>


        </div>
    )
}

export default Login
