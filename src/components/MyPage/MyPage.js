import React, { useEffect, useState } from 'react'
import TripDetails from '../TripDetails/TripDetails';
import useAuth from './../../hooks/useAuth';

const MyPage = () => {

    const { user } = useAuth()
    const { email } = user
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/schedule/${email}`)
            .then(res => res.json())
            .then(data => setSchedule(data));
    }, [email])


    return (
        <div className="flex justify-center border">
            <div className="text-center	">
                <h1>Tours planned for : {email}</h1>
                <p>You have {schedule.length} destinations planned</p>

                <div className="mt-5">
                    <div className="flex justify-center">


                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th>Destination</th>
                                    <th>Place</th>
                                    <th>Trip Start Date</th>
                                    <th>Trip End Date</th>
                                    <th>Cost</th>
                                    <th>Delete?</th>
                                </tr>
                            </thead>
                            {
                                schedule.map((trip) => <TripDetails key={trip._id} trip={trip}></TripDetails>)
                            }
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPage
