import { useEffect, useState } from 'react'


const useTours = () => {

    const [tours, setTours] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
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
