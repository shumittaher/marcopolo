import React, { useContext } from 'react'
import { ToursContext } from '../../contexts/ToursProvider'

const ExistingServices = () => {

    const { tours } = useContext(ToursContext)
console.log(tours)

    return (
        <div>
            <div className="small-container h-full">
                <h6 className="ttl"> Offered Services</h6>
                <p>Number: {tours.length}</p>
                
{
    tours.map(tour=><ul>{tour.nameOfTour}</ul> )
}

            </div>
        </div>
    )
}

export default ExistingServices
