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
            <AllTrips/>
        </div>
    )
}

export default AdminPage
