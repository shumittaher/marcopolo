import React, { useEffect, useState } from 'react'

const Banner = () => {

    const [bannerImage, setBannerImage] = useState(0)


    const imageArray = [
        'https://i.ibb.co/Wy01005/pexels-quang-nguyen-vinh-2132180.jpg',
        'https://i.ibb.co/BVyXhRb/pexels-alexandr-podvalny-2166553.jpg',
        'https://i.ibb.co/kBzfKfy/pexels-andrei-tanase-1271619.jpg',
        'https://i.ibb.co/8NnBCsm/pexels-alexandr-podvalny-2082949.jpg',
        'https://i.ibb.co/17Y29V8/pexels-dimitry-anikin-5043948.jpg',
        'https://i.ibb.co/7NwSFnK/pexels-asad-photo-maldives-1591373.jpg',
    ]


    useEffect(() => {
        setTimeout(() => { (bannerImage < 5) ? setBannerImage(bannerImage + 1) : setBannerImage(0) }, 5000)
        console.log(bannerImage)
    }, [bannerImage])

    return (
        <div className="relative">

            <div className="w-full h-full">
                <img className="object-cover w-screen h-screen" src={imageArray[bannerImage]} alt="" />
            </div>

            <div className="absolute top-1/3 w-full text-center text-white z-10 ">
                <h6 className="text-4xl">Find your special tour today</h6>
                <h1 className="text-8xl "> With Marco Polo Tours</h1>
            </div>


        </div>
    )
}

export default Banner
