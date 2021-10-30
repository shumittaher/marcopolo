import React from 'react'
import { useHistory } from 'react-router';

const OfferingCards = (props) => {

    const { imageLink, nameOfTour, } = props.tour

    const history = useHistory()

    const seeMore = () => {
        history.push('/destinations')
    }

    return (
        <div>

            <div className="flex-col flex items-center rounded-2xl p-5">

                <img style={{ width: '50rem' }} className="border-8 object-cover rounded-full" src={imageLink} alt="" />

                <div className="px-10 cursor-pointer  py-5 flex flex-col border-2 rounded-full justify-between  items-center absolute bottom-20 bg-gray-400 bg-opacity-50 z-10 text-white
                hover:bg-gray-300 hover:text-black 	hover:border-gray-700" onClick={seeMore}>

                    <h1 className="text-4xl">
                        {nameOfTour}
                    </h1>
                    <h6 className="text-lg">See More</h6>

                </div>

            </div>

        </div>
    )
}

export default OfferingCards
