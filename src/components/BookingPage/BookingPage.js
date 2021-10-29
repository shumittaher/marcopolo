import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router'
import useAuth from '../../hooks/useAuth';
import { ToursContext } from '../../contexts/ToursProvider';

const BookingPage = () => {
    const { id } = useParams()
    const { tours } = useContext(ToursContext)
    const bookingItem = tours.find((tour) => tour._id === id)
    const { imageLink, nameOfTour, place, descrition, fee } = bookingItem

    const { reset, register, handleSubmit } = useForm();

    const { user } = useAuth()

    const onSubmit = data => {
        const tourStart = data.startDate
        const tourEnd = data.endDate

        if (Date.parse(tourStart) >= Date.parse(tourEnd)) {
            alert('please recheck schdule, Start date is later than end Date')
            reset()
        } else {
            const userEmail = user.email
            const newSchedule = { userEmail, id, tourStart, tourEnd }

            fetch('https://pacific-cove-20307.herokuapp.com/addSchedule', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newSchedule)
            }).then(res => res.json())
                .then(result => {
                    if (result.insertedId) {
                        alert('success')
                        reset()
                    }
                })

        }
    }



    return (
        <div className="flex justify-center border">

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

                    <p className="my-5">Book for BDT <span>{fee} </span>only!!</p>

                </div>

                <div className="">

                    <form className='flex-col flex' onSubmit={handleSubmit(onSubmit)}>

                        <input type="date" placeholder="Start Date" {...register("startDate", { required: true })} />
                        <input type="date" placeholder="End Date" {...register("endDate", { required: true })} />

                        <button type="submit" className="btn mt-5">Book Now</button>
                    </form>

                </div>
            </div>

        </div>


    )
}

export default BookingPage
