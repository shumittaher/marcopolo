import React, { useContext } from 'react'
import BigTours from '../BigTours/BigTours'
import { ToursContext } from '../../contexts/toursProvider'


const TourOffering = () => {

    const { tours } = useContext(ToursContext)


    return (
        <div className="items-center flex flex-col pt-32">

            <h1 className="ttl mb-5">Your Destinations Await...</h1>

            <div className="w-full max-w-screen-xl">
                {
                    tours.map((tour) => <BigTours key={tour._id} tour={tour}></BigTours>)
                }
            </div>

        </div>
    )
}

export default TourOffering
