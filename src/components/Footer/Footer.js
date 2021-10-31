import React from 'react'
import logo from '../../images/designpics/logo.png'

const Footer = () => {
    return (

        <div id="about" className="bg-indigo-900 mt-20 py-10 lg:px-44 px-10">


            <div className="flex md:flex-row flex-col justify-around text-white  ">

                <div className="flex flex-col font-bold">
                    <h1>ABOUT US</h1>

                    <img className="mb-12 w-80" src={logo} alt="" />

                    <div className="flex text-4xl">
                        <i className="fab pr-2 fa-facebook-square"></i>
                        <i className="fab px-2 fa-instagram-square"></i>
                        <i className="fab px-2 fa-pinterest-square"></i>
                        <i className="fab px-2 fa-twitter-square"></i>
                    </div>
                    <p className="text-gray-400	my-5">
                        Business Number: <span className="text-white"> + 88 0183464849 </span><br />
                        3131 Gulshan Ave. Dhaka, Bangladesh <br />
                        Complaints/Enquiries: (Email) Marco@traveler.com
                    </p>

                </div>
                <div className="flex flex-grow justify-evenly">
                    <div className="flex flex-col font-bold">
                        <h5 className="mb-8">TOUR</h5>
                        <h6 className="mb-4">Thailand</h6>
                        <h6 className="mb-4">Vietnam</h6>
                        <h6 className="mb-4">Cambodia</h6>
                        <h6 className="mb-4">Korea</h6>
                        <h6 className="mb-4">Japan</h6>
                    </div>
                    <div className="flex flex-col  font-bold">
                        <h5 className="mb-8">SUPPORT</h5>
                        <h6 className="mb-4">Account</h6>
                        <h6 className="mb-4">Legal</h6>
                        <h6 className="mb-4">Contact</h6>
                        <h6 className="mb-4">Affiliate Program</h6>
                        <h6 className="mb-4">Privacy Policy</h6>
                    </div>
                    <div className="flex flex-col  font-bold">
                        <h5 className="mb-8">USEFUL PAGES</h5>
                        <h6 className="mb-4">Deals</h6>
                        <h6 className="mb-4">FAQs</h6>
                        <h6 className="mb-4">Why Choose Us</h6>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default Footer
