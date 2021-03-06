import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../images/banner/1.jpg'
import image2 from '../../images/banner/2.jpg'
import image3 from '../../images/banner/3.jpg'
import image4 from '../../images/banner/4.jpg'
import image5 from '../../images/banner/5.jpg'
import image6 from '../../images/banner/6.jpg'

export const imageArray = [
    image1, image2, image3, image4, image5, image6
]

const Banner = () => {

    const [bannerImage, setBannerImage] = useState(0)

    useEffect(() => {
        setTimeout(() => { (bannerImage < 5) ? setBannerImage(bannerImage + 1) : setBannerImage(0) }, 5000)
    }, [bannerImage])

    return (
        <div className="h-full">

            <div className="w-full h-full">
                <img className="object-cover w-screen h-screen" src={imageArray[bannerImage]} alt="" />
            </div>

            <div className="absolute top-1/3 right-1/3 md:left-auto left-5 text-white z-10 ">
                <h6 className="md:text-4xl text-xl text-indigo-900	font-bold	">Find your special tour today</h6>
                <h1 className="md:text-8xl text-3xl"> With Marco Polo Tours</h1>

                <Link to="/destinations"><button className="btn-big ">
                    Explore More
                </button></Link>

            </div>


        </div>
    )
}

export default Banner
