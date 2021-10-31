import React from 'react'
import multitravelers from '../../images/designpics/multitravelers.png'
import orangesquiggle from '../../images/designpics/orangesquiggle.png'
import discount from '../../images/designpics/discount.png'


const MultiTours = () => {
    return (
        <div className="flex md:flex-row flex-col justify-center items-center w-full max-w-6xl mt-5">


            <div className="md:w-1/2 max-w-sm md:max-w-6xl  h-full md:px-12 md:py-24 px-5 py-8 bg-yellow-50  rounded-3xl flex-col flex justify-around">

                <div style={{
                    transform: "rotate(6deg)"
                }} className="relative mb-40">
                    <h6 className="text-4xl font-bold text-indigo-900 z-10 absolute">
                        <span className="text-xl"> Multi-Tours
                        </span>
                        <br />
                        Discount on Quantity

                    </h6>
                    <img style={{
                        width: "250px",
                        transform: "rotate(-30deg)",
                        top: '10px'
                    }}
                        className="absolute z-0" src={orangesquiggle} alt="" />
                </div>

                <p className="md:mb-24 text-gray-500    p-2  font-semibold	">Book a tour today and enjoy exclusive savings on any future trip you book! There’s no time limit or expiry date on these savings
                </p>

                <img src={discount} alt="" />


            </div>

            <div className="md:w-1/2 max-w-sm md:max-w-6xl md:h-screen flex-col flex justify-around">
                <img src={multitravelers} alt="" />
            </div>

        </div>
    )
}

export default MultiTours
