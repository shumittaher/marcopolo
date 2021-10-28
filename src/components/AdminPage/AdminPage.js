import React from 'react'
import { useForm } from "react-hook-form";


const AdminPage = () => {

    const { reset, register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset()
    };

    return (
        <div>

            <div>
                <h6>Add New Tours</h6>

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

                    <input type="submit" value="Add to DB" />

                </form>

            </div>


        </div>
    )
}

export default AdminPage
