import React from 'react'

const BigTours = (props) => {

    const { imageLink, nameOfTour, descrition, place, fee } = props.tour

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
                    <p>{place}</p>

                    <small>
                        {descrition}
                    </small>
                </div>
                <button className="btn mt-5">Book Now</button>
            </div>

        </div>
    )
}

export default BigTours
