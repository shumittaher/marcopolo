import React from 'react'
import useAuth from './../../hooks/useAuth';


const Login = () => {

    const { user, signInWithGoogle } = useAuth()

    return (
        <div>

            <h1>{user.email}</h1>

            <button onClick={signInWithGoogle}> Sign In with Google</button>


        </div>
    )
}

export default Login
