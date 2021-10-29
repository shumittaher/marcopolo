import React from 'react'
import AddServiceForm from '../AddServiceForm/AddServiceForm';
import ExistingServices from './../ExistingServices/ExistingServices';


const AdminPage = () => {


    return (
        <div>
            <div className="flex justify-center">
                <AddServiceForm/>
                <ExistingServices />
            </div>
        </div>
    )
}

export default AdminPage
