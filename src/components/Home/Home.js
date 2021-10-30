import React from 'react'
import Banner from '../Banner/Banner'
import HomePageOfferings from '../HomePageOfferings/HomePageOfferings'
import NeverAlone from '../NeverAlone/NeverAlone'

const Home = () => {
    return (

        <div className="items-center flex flex-col">
            <Banner />
            <HomePageOfferings />
            <NeverAlone />
            
        </div>
    )
}

export default Home
