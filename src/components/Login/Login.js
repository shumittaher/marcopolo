import React from 'react'
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../hooks/useAuth';


const Login = () => {

    const { signInWithGoogle, setUser, setError, setIsLoading } = useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/'


    const handleSignInWithGoogle = () => {
        signInWithGoogle().then((result) => {
            setUser(result.user);
        }).catch((error) => {
            setError(error.message);
        }).finally(() => {
            setIsLoading(false)
            history.push(redirect_url)
        });
    }

    return (
        <div className="items-center flex flex-col pt-24">

            <h1 className="text-xl my-10">Please sign in to proceed</h1>

            <button className="btn" onClick={handleSignInWithGoogle}> Sign In with Google</button>


        </div>
    )
}

export default Login
