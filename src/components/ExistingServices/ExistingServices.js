import React, { useContext } from 'react'
import { ToursContext } from '../../contexts/toursProvider'

const ExistingServices = () => {

    const { tours } = useContext(ToursContext)
    
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
