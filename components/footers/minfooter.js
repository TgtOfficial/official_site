import React from 'react';
import Fsection from './fsection';
import { useState } from "react";
import Desc from './disc'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    div,
    MDBRow,
    button
} from 'mdb-react-ui-kit';

const Minfooter = () => {


    const [isActiveff, setIsActiveff] = useState(false)

    const ff = () => {
        setIsActiveff(!isActiveff);
    }



    return (


        <div className='mfd bg-dark '>
            <style jsx>
                {
                    `
                    .spdown{
                        border:1px solid gray;
                        padding:8px;
                        border-radius:34px;
                        height:30px;
                        width:30px;
                        padding:2px;
                    }
                    .ccri8{
                        background:black;

                    }
                    .app_ico{
                        list-style:none;

                    }
                    .ul a{
                        color:gray;
                    }
                    `
                }
            </style>
            <div className="ccri8 text-center d-flex justify-content-between text-white p-3"><div className="cctext">© 2022 - The Generic Technology</div> <div onClick={ff} className="spdown"> <i className="bi bi-arrow-down-short"></i></div></div>

            <section className='bg-dark'>

                <div className='d-flex ff flex-column'>
                    <div className=''>
                        <p className='text-center text-white'>Follow Us!</p>
                        <div className="text-center mic">
                            <button outline color="light" floating className='m1 alink btn btn-outline-secondary' href='#!' role='button'>
                                <MDBIcon fab icon='facebook-f' />
                            </button>

                            <button outline color="light" floating className='m1 alink btn btn-outline-secondary' href='#!' role='button'>
                                <MDBIcon fab icon='twitter' />
                            </button>

                            <button outline color="light" floating className='m1 alink btn btn-outline-secondary' href='#!' role='button'>
                                <MDBIcon fab icon='google' />
                            </button>

                            <button outline color="light" floating className='m1 alink btn btn-outline-secondary' href='#!' role='button'>
                                <MDBIcon fab icon='instagram' />
                            </button>

                            <button outline color="light" floating className='m1 alink btn btn-outline-secondary' href='#!' role='button'>
                                <MDBIcon fab icon='linkedin-in' />
                            </button>

                            <button outline color="light" floating className='m1 alink btn btn-outline-secondary' href='#!' role='button'>
                                <MDBIcon fab icon='github' />
                            </button>
                        </div>
                    </div>
                    <div className='m-auto text-center'>
                        <p className='text-center'>Company</p>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='fl'>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='fl'>
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='fl'>
                                    In the media
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='fl'>
                                    Alumni speak
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='fl'>
                                    Grievance redressal
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='fl'>
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='m-auto text-center'>
                        <p className='text-center'>Work with us</p>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='fl'>
                                    Become an instructor
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='fl'>
                                    Blog as guest
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='m-auto text-center'>
                        <p className='text-center'>Discover</p>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='fl'>
                                    Skillup
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='fl'>
                                    Skillup Sitemap
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='fl'>
                                    Resources
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='fl'>
                                    RSS feed
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='fl'>
                                    The Generic Technology Coupons and Discount Offers
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='fl'>
                                    City Sitemap
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='m-auto text-center'>
                        <p className='text-center'>For Businesses</p>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='fl'>
                                    Corporate training
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='fl'>
                                    Partners
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='fl'>
                                    Digital Transformation
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='m-auto text-center'>
                        <p className='text-center'>Learn On the Go!</p>

                        <ul className='app_ico'>
                            <li className=" fapp text-start"><i className="bi mr8 bi-apple"></i>Get the iOS App</li>
                            <li className=" fapp text-start"><i className="bi mr8 bi-android"></i>Get the Android App</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='bg-dark'>
                {/* <Fsection /> */}
            </section>



            <style jsx>
                {
                    `
                    ul{
                        color:white;
                        list-style:none;
                        margin-left:0px;
                        padding:0px;
                    }
                    p{
                        margin-top:14px;
                    }
                    `
                }
            </style>

        </div>
    )
}

export default Minfooter