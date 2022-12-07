import React from 'react'
import Header1 from '../components/headers/header1'
import { useState } from 'react'
import axios from 'axios';



const online = () => {

    const [courses, setCourses] = useState([]);














    return (
        <>
            <div className="main_div">
                <Header1 />
                <div className="formdiv">
                    <div className="text-center p-5 pb-0">
                        <p className="text-secondary">Register to Your Dream Course. We will get back to you soon...</p>
                    </div>
                    <form action="#" className="form p-5 pt-2">
                        <div className="form-group">
                            <label htmlFor="name" className="name pt-4 form-label">Name</label>
                            <input className='form-control' type="text" placeholder='Enter your name' name='name' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name" className="name pt-4 form-label">Email</label>
                            <input className='form-control' type="text" placeholder='Enter your name' name='name' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name" className="name pt-4 form-label">Mobile</label>
                            <input className='form-control' type="text" placeholder='Enter your name' name='name' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name" className="name pt-4 form-label">Course</label>
                            <select name="course" id="" className="form-select">
                            <option value="DCA">DCA</option>
                            <option value="DCA">ADCA</option>
                            <option value="DCA">TALLY</option>


                            </select>
                        </div>
          
                        <div className="form-group">
                            <label htmlFor="name" className="name pt-4 form-label"></label>
                            <button type='submit' className='btn mt-5 btn-primary w-100' >Register</button>
                        </div>
                    </form>
                </div>
                <div className="footer w-100 p-4 bg-black pb-1">
                    <div className="text-center"><p className="text-white">© 2022 - The Generic Technology</p></div>
                </div>
            </div>
            <style>
                {
                    `
            .footer{
                position:absolute;
                bottom:0px;
            }
            `
                }
            </style>


        </>
    )
}

export default online