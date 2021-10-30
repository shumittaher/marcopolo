import React, { useState } from 'react'
import useTours from '../../hooks/useTours';
import OfferingCards from '../OfferingCards/OfferingCards';
import { imageArray } from './../Banner/Banner';


const HomePageOfferings = () => {

    const { tours } = useTours()

    const [current, setCurrent] = useState(0)

    const prevSlide = () => {
        setCurrent(current === 0 ? imageArray.length - 1 : current - 1)
    }

    const nextSlide = () => {
        setCurrent(current === imageArray.length - 1 ? 0 : current + 1)
    }

    return (
        <section className="my-12 flex flex-col w-full max-w-6xl justify-center items-center relative text-center ">
            
            
            <svg onClick={prevSlide} className="w-20 h-20 left-0 cursor-pointer	absolute z-10 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
            </svg>
            
            
            <svg onClick={nextSlide} className="w-20 h-20 right-0 cursor-pointer absolute z-10 opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
            </svg>

            <h6 className="text-6xl bg-white rounded-full mb-7 text-indigo-900	">Get ready to explore with us...</h6>
            
            {
                tours.map((tour, index) => {
                    return (
                        <div className={index === current ? "opacity-100 transition  duration-1000 ease-in-out" : "opacity-0 transition  duration-1000 ease-in-out"} key={index}>

                            {
                                index === current &&
                                <OfferingCards tour={tour}></OfferingCards>
                            }
                        </div>
                    )
                })
            }


        </section>
    )
}

export default HomePageOfferings
