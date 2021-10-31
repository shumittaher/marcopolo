import React, { useEffect, useState } from 'react'
import TripDetails from '../TripDetails/TripDetails'

const AllTrips = () => {

    const [allSchedules, setAllSchedules] = useState([])

    useEffect(() => {
        fetch('https://pacific-cove-20307.herokuapp.com/allSchedules')
            .then(res => res.json())
            .then(result => {
                setAllSchedules(result)
            })
    }, [])

    if (allSchedules.length === 0) {
        return <div className="flex justify-center pt-32">
            <div className="loader"></div>
        </div>
    }

    return (
        <div className="flex justify-center border">
            <div className="text-center	">


                <div className="flex mt-5 justify-center">


                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="hidden md:block"></th>
                                <th className="hidden md: table-cell">User</th>
                                <th>Destination</th>
                                <th>Place</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Cost</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            allSchedules.map((trip) => <TripDetails key={trip._id} trip={trip} schedule={allSchedules}
                                setSchedule={setAllSchedules}></TripDetails>)
                        }
                    </table>

                </div>
            </div>
        </div>

    )
}

export default AllTrips
