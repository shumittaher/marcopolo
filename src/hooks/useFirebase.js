import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeFirebase from './../firebase/firebase.init';


initializeFirebase()
const auth = getAuth();

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const signInWithGoogle = () => {
        setIsLoading(true)
        const googlePopUpProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googlePopUpProvider)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message);
        }).finally(() => setIsLoading(false)
        );


    }

    return {
        user,
        error,
        signInWithGoogle,
        logOut,
        isLoading,
        setUser,
        setError,
        setIsLoading
    }
}

export default useFirebase
