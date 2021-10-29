import { useEffect, useState } from 'react'


const useTours = () => {

    const [tours, setTours] = useState([])

    useEffect(() => {
        fetch('https://pacific-cove-20307.herokuapp.com/services')
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
