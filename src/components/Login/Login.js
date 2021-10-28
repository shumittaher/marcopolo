import React from 'react'
import useAuth from './../../hooks/useAuth';


const Login = () => {

    const { signInWithGoogle } = useAuth()

    return (
        <div>


            <button onClick={signInWithGoogle}> Sign In with Google</button>


        </div>
    )
}

export default Login
