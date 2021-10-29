import React, { useContext } from 'react'
import { ToursContext } from '../../contexts/ToursProvider'

const ExistingServices = () => {

    const { tours } = useContext(ToursContext)

    return (
        <div>
            <div className="small-container">
                <h6 className="ttl"> Offered Services</h6>

                <p>Number: {tours.length}</p>
                
            </div>
        </div>
    )
}

export default ExistingServices
