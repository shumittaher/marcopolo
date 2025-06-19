import { useEffect, useState } from 'react'
const apiUrl = process.env.REACT_APP_API_URL;
// const apiUrl = 'https://marcopolo-server.onrender.com';

const useTours = () => {

    const [tours, setTours] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/services`)
            .then(res => res.json())
            .then(result => {
                setTours(result)
            })
    }, [])

    return {
        tours
    }
}

export default useTours
