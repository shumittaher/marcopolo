import React, { useContext } from 'react'
import { ToursContext } from '../../contexts/ToursProvider';

const TripDetails = (props) => {

    const { tourStart, tourEnd, id } = props.trip
    const { tours } = useContext(ToursContext)

    const trip = tours.find((tour) => tour._id === id)

    const { imageLink, nameOfTour, place, fee } = trip

    return (

        <tbody>

            <td>{nameOfTour}</td>

            <td>{place}</td>

            <td>{tourStart}</td>

            <td>{tourEnd}</td>

            <td>{fee}</td>

            <td><button>X</button> </td>

        </tbody>

    )
}

export default TripDetails
