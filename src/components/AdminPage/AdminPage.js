import React from 'react'
import AddServiceForm from '../AddServiceForm/AddServiceForm';
import AllTrips from '../AllTrips/AllTrips';
import ExistingServices from './../ExistingServices/ExistingServices';


const AdminPage = () => {


    return (
        <div className="pt-20">
            <div className="flex justify-center">
                <AddServiceForm />


                <ExistingServices />
            </div>

            <h1 className="my-10 text-2xl text-center">Booked Tours</h1>

            <AllTrips />
        </div>
    )
}

export default AdminPage
