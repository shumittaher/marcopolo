import React from 'react'
import { useHistory } from 'react-router';
import blueunderline from '../../images/designpics/blueunderline.png'

const OfferingCards = (props) => {

    const { imageLink, nameOfTour, fee , place} = props.tour

    console.log(props.tour)
    const history = useHistory()

    const seeMore = () => {
        history.push('/destinations')
    }

    return (
        <div>

            <div className="flex-col flex items-center rounded-2xl p-5 relative">

                <div
                    style={{
                        width: '50rem',
                        height: '35rem',
                    }}
                    className="border-8 rounded overflow-hidden ">
                    <img
                        className="object-cover w-full 	h-full
                        transition duration-1000 ease-in-out 
                        transform hover:scale-105 
                        " src={imageLink} alt="" />
                </div>

                <div
                    style={{
                        width: '52rem',
                       
                            fontFamily: `'Dancing Script', cursive`
                      
                    }}
                    className="absolute -bottom-2 flex justify-between items-center ">

                    <div className="h-44 w-44  bg-yellow-100 flex flex-col justify-center items-center ">
                        <h1 className="text-2xl  font-bold z-10">
                            Book For
                        </h1>

                        <img className="absolute w-20 z-0" src={blueunderline} alt="" />
                        
                        <h1 className="text-md font-bold z-10">
                            BDT {fee}  Only!
                        </h1>
                    </div>

                    <div
                        className="px-10 cursor-pointer py-5 flex flex-col border-2 rounded-full justify-between  items-center  bg-gray-400 bg-opacity-50 z-10 text-white
                hover:bg-gray-300 hover:text-black 	hover:border-gray-700"
                        onClick={seeMore}>

                        <h1 className="text-xl">
                            {nameOfTour}
                        </h1>
                        <h6 className="text-md text-indigo-900 font-bold">See More</h6>

                    </div>

                    
                    <div className="h-44 w-44  bg-yellow-100 flex flex-col justify-center items-center ">
                        
                        <h1 className="text-2xl p-4 font-bold z-10"
                        style={{
                            fontFamily: `'Dancing Script', cursive`
                        }}
                        >
                            {place}
                        </h1>

<img className="absolute w-20 z-0" src={blueunderline} alt="" />

                    </div>

                </div>
            </div>

        </div>
    )
}

export default OfferingCards
