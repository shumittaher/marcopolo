import React, { useEffect, useState } from 'react'
import TripDetails from '../TripDetails/TripDetails';
import useAuth from './../../hooks/useAuth';

const MyPage = () => {

    const { user } = useAuth()
    const { email } = user
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
        fetch(`https://pacific-cove-20307.herokuapp.com/schedule/${email}`)
            .then(res => res.json())
            .then(data => setSchedule(data));
    }, [email])

    console.log(schedule)

    return (
        <div className="flex justify-center border">
            <div className="text-center	">

                <h1>Tours planned for : {email}</h1>
                <p>You have {schedule.length} destinations planned</p>

                <div className="flex mt-5 justify-center">


                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Destination</th>
                                <th>Place</th>
                                <th>Trip Start Date</th>
                                <th>Trip End Date</th>
                                <th>Cost</th>
                                <th>Delete?</th>
                            </tr>
                        </thead>
                       
                            {
                                schedule.map((trip) => <TripDetails key={trip._id} trip={trip} schedule={schedule}
                                    setSchedule={setSchedule}></TripDetails>)
                            }
                            
                        

                    </table>

                </div>
            </div>
        </div>
    )
}

export default MyPage
