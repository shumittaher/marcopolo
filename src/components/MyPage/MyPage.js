import React, { useEffect, useState } from 'react'
import TripDetails from '../TripDetails/TripDetails';
import useAuth from './../../hooks/useAuth';

const apiUrl = process.env.REACT_APP_API_URL;


const MyPage = () => {

    const { user } = useAuth()
    const { email } = user
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/schedule/${email}`)
            .then(res => res.json())
            .then(data => setSchedule(data));
    }, [email])

    if (schedule.length === 0) {
        return <div className="flex justify-center pt-32">
            <div className="loader"></div>
        </div>
    }

    return (
        <div className="flex justify-center pt-32">
            <div className="text-center	">

                <h1>Tours planned for : {email}</h1>
                <p>You have {schedule.length} destinations planned</p>

                <div className="flex mt-5 justify-center">


                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="hidden md:inline"></th>
                                <th>Destination</th>
                                <th>Place</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Cost</th>
                                <th></th>
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
