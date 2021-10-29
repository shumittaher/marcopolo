import React from 'react'
import { useForm } from "react-hook-form";


const AddServiceForm = () => {
    
    const { reset, register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('success')
                    reset()
                }
            })

    };

    return (
        <div>
             <div className="small-container">
                <h6 className="ttl">Add New Tours</h6>

                <form className='flex-col flex' onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="Name of Tour" {...register("nameOfTour", { required: true })} />
                    {errors.nameOfTour && <span>This field is required</span>}

                    <textarea placeholder="Description of Tour" {...register("descrition", { required: true })} />
                    {errors.descrition && <span>This field is required</span>}

                    <input placeholder="Booking Fee" {...register("fee", { required: true })} />
                    {errors.fee && <span>This field is required</span>}

                    <input placeholder="Place of Tour" {...register("place", { required: true })} />
                    {errors.place && <span>This field is required</span>}

                    <input placeholder="Image Link" {...register("imageLink", { required: true })} />
                    {errors.imageLink && <span>This field is required</span>}

                    <input className="m-5 btn" type="submit" value="Add to DB" />

                </form>

            </div>

        </div>
    )
}

export default AddServiceForm
