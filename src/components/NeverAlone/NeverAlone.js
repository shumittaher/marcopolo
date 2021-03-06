import React from 'react'
import orangesquiggle from '../../images/designpics/orangesquiggle.png'
import smartphone from '../../images/designpics/smartphone.png'
import sleep from '../../images/designpics/sleep.png'
import licenced from '../../images/designpics/licenced.png'
import happytraveler from '../../images/designpics/happytraveler.png'

const NeverAlone = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl">
            
            <div className="md:w-1/2 max-w-sm md:max-w-6xl h-full flex-col flex justify-around">

                <div style={{
                    transform: "rotate(-6deg)"
                }} className="relative mb-24">
                    <h6 className="text-4xl font-bold text-indigo-900 z-10 absolute">

                        <span className="text-xl">
                            With us,
                        </span>

                        <br /> You are never alone
                    </h6>
                    <img style={{
                        width: "250px",
                        transform: "rotate(-30deg)",
                        top: '10px'
                    }}
                        className="absolute z-0" src={orangesquiggle} alt="" />
                </div>
                <img src={happytraveler}  alt="" />
            </div>

            <div className="md:w-1/2 max-w-sm md:max-w-6xl  h-full md:px-12 md:py-24 px-5 py-8 bg-yellow-50  rounded-3xl flex-col flex justify-around">

                <p className="mb-10 text-gray-500    p-2  font-semibold	">Since 2014, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land and something like that.
                </p>

                <h1 className="font-bold text-indigo-900 inline-block mb-10 text-2xl ">Why Choose Us</h1>

                <div className=" flex mb-10">
                    <img style={{ width: '48px' }} src={smartphone} className="mr-5" alt="" />
                    <p className="text-lg  ">BOOKING WITH <br /> SPREAD PAYMENTS</p>
                </div>
                <div className="  flex mb-10">
                    <img style={{ width: '48px' }} src={sleep} className="mr-5" alt="" />
                    <p className="text-lg ">SLEEP & TRAVEL IN <br /> COMFORT</p>
                </div>

                <div className=" flex mb-3">
                    <img style={{ width: '48px' }} src={licenced} className="mr-5" alt="" />
                    <p className="text-lg ">FULLY LICENSED TOUR <br /> OPERATOR</p>
                </div>


            </div>



        </div>
    )
}

export default NeverAlone
