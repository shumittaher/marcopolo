import React from 'react'
import { Link } from 'react-router-dom'

const BigTours = (props) => {

    const {_id, imageLink, nameOfTour, descrition, place } = props.tour

    console.log(props.tour)

    return (
        <div className="flex border">

            <div className="w-2/4 h-auto border">
                <img className="object-cover w-full h-full" src={imageLink} alt="" />
            </div>

            <div className="w-1/2 px-8 py-5 flex flex-col justify-between">
                <div>
                    <h1 className="ttl mb-5">
                        {nameOfTour}
                    </h1>
                    <p className="mb-5">{place}</p>

                    <small>
                        {descrition}
                    </small>
                </div>
                <Link to={`/booking/${_id}`}><button className="btn mt-5">Book Now</button></Link>
            </div>

        </div>
    )
}

export default BigTours
