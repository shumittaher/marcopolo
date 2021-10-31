import React, { useContext } from 'react'
import { useLocation } from 'react-router';
import { ToursContext } from '../../contexts/ToursProvider';

const TripDetails = (props) => {

    const location = useLocation()

    const { tourStart, tourEnd, id, _id, userEmail } = props.trip
    const { schedule, setSchedule } = props
    const { tours } = useContext(ToursContext)

    const trip = tours.find((tour) => tour._id === id)

    const { imageLink, nameOfTour, place, fee } = trip

    const handleDeleteTrip = () => {
        const confirm = window.confirm("Are you sure?")

        if (confirm) {
            fetch(`https://pacific-cove-20307.herokuapp.com/schedule/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Success')
                        const remainingSchedule = schedule.filter((trip) => trip._id !== _id)
                        setSchedule(remainingSchedule)
                    }
                })
        }
    }

    return (

        <tbody>

            <td className="hidden md:inline"><img src={imageLink} alt="" /></td>
            {
                location.pathname === '/admin' ? <td className="hidden md:table-cell">{userEmail}</td> : ""
            }
            <td>{nameOfTour}</td>

            <td>{place}</td>

            <td>{tourStart}</td>

            <td>{tourEnd}</td>

            <td>{fee}</td>

            <td>
                <button onClick={() => handleDeleteTrip()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </td>

        </tbody>

    )
}

export default TripDetails
